from keras.models import Model
from keras.layers import Flatten, Dense, Dropout, BatchNormalization, Activation, SpatialDropout2D
from keras.applications import ResNet50

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

# Print model summary
model.summary()
