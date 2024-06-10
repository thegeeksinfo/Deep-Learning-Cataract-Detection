import torch
import torchvision.models as models
import torchvision.transforms as transforms
from PIL import Image
import os
import google.generativeai as genai
from django.conf import settings

# Define the device
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

def load_model():
    model = models.resnet152(pretrained=False)
    num_ftrs = model.fc.in_features
    out_ftrs = 2  # Binary classification
    model.fc = torch.nn.Sequential(
        torch.nn.Linear(num_ftrs, 512),
        torch.nn.ReLU(),
        torch.nn.Linear(512, out_ftrs),
        torch.nn.LogSoftmax(dim=1)
    )
    model_path = os.path.join(os.path.dirname(__file__), 'final_model.pth')
    model.load_state_dict(torch.load(model_path, map_location=device))
    model.to(device)
    model.eval()
    return model

model = load_model()

transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])
])

def predict(image):
    image = Image.open(image).convert('RGB')
    image = transform(image).unsqueeze(0).to(device)
    with torch.no_grad():
        output = model(image)
        _, predicted = torch.max(output, 1)
        prediction = 'Has Cataract' if predicted.item() == 1 else 'Is Normal'
    return prediction

def generate_medical_report(prediction):
    genai.configure(api_key=settings.GOOGLE_API_KEY)

    generation_config = {
        "temperature": 1,
        "top_p": 0.95,
        "top_k": 64,
        "max_output_tokens": 8192,
        "response_mime_type": "text/plain",
    }

    model = genai.GenerativeModel(
        model_name="gemini-1.5-flash",
        generation_config=generation_config,
        system_instruction="Act like  a support ophthalmologist whose only responsibility is give a mediacl report based on the diagnosis from eye images. I have a patient whom I have determined to have cataracts or not have cataracts. Can you help me draft a professional but easily understood and non conclusive medical response/report  of no more than 100 words.   (The response must be final with no room for editing.  It must also not mention anything about further discussion unless its with the doctor they will later visit to do treatment)",
    )

    chat_session = model.start_chat(
        history=[
            {
                "role": "user",
                "parts": [prediction],
            }
        ]
    )

    response = chat_session.send_message(prediction)
    return response.text

def predict_and_generate_report(image):
    prediction = predict(image)
    report = generate_medical_report(prediction)
    return prediction, report
