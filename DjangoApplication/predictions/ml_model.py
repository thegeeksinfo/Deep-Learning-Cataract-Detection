import torch
import torchvision.models as models
import torchvision.transforms as transforms
from PIL import Image
import os

# Define the device
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

def load_model():
    # Load the trained model
    model = models.resnet152(pretrained=False)
    num_ftrs = model.fc.in_features
    out_ftrs = 2  # Binary classification
    model.fc = torch.nn.Sequential(
        torch.nn.Linear(num_ftrs, 512),
        torch.nn.ReLU(),
        torch.nn.Linear(512, out_ftrs),
        torch.nn.LogSoftmax(dim=1)
    )
    model_path = os.path.join(os.path.dirname(__file__), '#')
    model.load_state_dict(torch.load(model_path, map_location=device))
    model.to(device)
    model.eval()
    return model


model = load_model()

# Define image transformations
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
