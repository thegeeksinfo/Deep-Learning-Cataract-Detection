import os
import Augmentor # type: ignore

# Define paths
data_dir = "../data"
output_dir = "../data/augmented"

# Function to create Augmentor pipeline for data augmentation
def create_augmentor_pipeline(input_dir, output_dir):
    os.makedirs(output_dir, exist_ok=True)
    p = Augmentor.Pipeline(input_directory=input_dir, output_directory=output_dir)
    # Add augmentation operations to the pipeline
    p.rotate(probability=0.7, max_left_rotation=10, max_right_rotation=10)
    p.flip_left_right(probability=0.5)
    p.zoom_random(probability=0.5, percentage_area=0.8)
    # You can add more augmentation operations as needed
    return p

# Function to apply data augmentation
def apply_augmentation(pipeline, num_samples):
    pipeline.sample(num_samples)

# Preprocess images with data augmentation
def preprocess_with_augmentation():
    for category in ["1_normal", "2_cataract"]:
        category_dir = os.path.join(data_dir, category)
        output_category_dir = os.path.join(output_dir, category)
        os.makedirs(output_category_dir, exist_ok=True)
        
        # Create Augmentor pipeline
        pipeline = create_augmentor_pipeline(category_dir, output_category_dir)
        
        # Apply data augmentation
        apply_augmentation(pipeline, num_samples=1000)  # Adjust num_samples as needed

# Main function
if __name__ == "__main__":
    preprocess_with_augmentation()
