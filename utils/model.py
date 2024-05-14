import tensorflow as tf
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras.applications import ResNet50
from tensorflow.keras.layers import Dense, GlobalAveragePooling2D, Flatten, Dropout, BatchNormalization, Activation, SpatialDropout2D
from tensorflow.keras.models import Model

train_dir = '../data/train/'
test_dir = '../data/test/'

train_datagen = ImageDataGenerator(
    rescale=1./255,
    rotation_range=20,
    width_shift_range=0.2,
    height_shift_range=0.2,
    shear_range=0.2,
    zoom_range=0.2,
    horizontal_flip=True,
    fill_mode='nearest'
)

test_datagen = ImageDataGenerator(rescale=1./255)

train_generator = train_datagen.flow_from_directory(
    train_dir,
    target_size=(224, 224),
    batch_size=32,
    class_mode='binary'
)

test_generator = test_datagen.flow_from_directory(
    test_dir,
    target_size=(224, 224),
    batch_size=32,
    class_mode='binary'
)

# Loaded pre-trained ResNet50 model with the top (fully connected) layers included
base_model = ResNet50(weights='imagenet', include_top=True, input_shape=(224, 224, 3))

# Optionally, can freeze some layers in the base model
# for layer in base_model.layers[:-5]:  # Freeze all layers except the last 5
#     layer.trainable = False

# Added custom top layers for cataract detection
x = base_model.layers[-2].output  # Use the second-to-last layer as input for customization
x = Dense(512)(x)
x = BatchNormalization()(x)
x = Activation('relu')(x)
x = SpatialDropout2D(0.5)(x)  # Spatial Dropout for 2D feature maps
predictions = Dense(1, activation='sigmoid')(x)  # Output layer for binary classification

# Combine the base model and custom top layers into a new model
model = Model(inputs=base_model.input, outputs=predictions)

# Compile the model
model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])
  
# Train model
model.fit(
    train_generator,
    steps_per_epoch=len(train_generator),
    epochs=3,
    validation_data=test_generator,
    validation_steps=len(test_generator)
)
