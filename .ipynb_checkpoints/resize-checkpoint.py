
import cv2
import numpy as np
import os

# Define the target size for resizing
target_size = (224, 224)  # You can adjust this based on your model requirements

# Define the directory containing the images

data_dir = "./data/original/train/normal"

# Define the directory where preprocessed images will be saved
output_dir = "./data/original/train/normal2"

# Create the output directory if it doesn't exist
os.makedirs(output_dir, exist_ok=True)

# Loop through each image file in the data directory
for filename in os.listdir(data_dir):
    # Load the image using OpenCV
    image_path = os.path.join(data_dir, filename)
    image = cv2.imread(image_path)
    
    # Check if the image is loaded successfully
    if image is None:
        print(f"Unable to load image: {filename}")
        continue
    
    # Resize the image
    resized_image = cv2.resize(image, target_size)
    
    # Normalize the pixel values
    resized_image = resized_image.astype(np.float32) / 255.0
    
    # Save the preprocessed image
    output_path = os.path.join(output_dir, filename)
    cv2.imwrite(output_path, resized_image * 255.0)

print("Preprocessing complete.")