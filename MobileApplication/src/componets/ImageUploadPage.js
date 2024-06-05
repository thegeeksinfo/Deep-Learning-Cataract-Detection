import React, { useState } from 'react';
import { Button, View, Image, Text, ActivityIndicator, Alert } from 'react-native';
import ImagePicker from 'react-native-image-picker';

const ImageUploadPage = () => {
  const [image, setImage] = useState(null);
  const [prediction, setPrediction] = useState('');
  const [loading, setLoading] = useState(false);

  const pickImage = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.uri };
        setImage(source);
      }
    });
  };

  const captureImage = () => {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      base64: false,
    };

    ImagePicker.launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.error) {
        console.log('Camera Error: ', response.error);
      } else {
        const source = { uri: response.uri };
        setImage(source);
      }
    });
  };

  const uploadImage = async () => {
    if (!image) {
      Alert.alert('Error', 'Please select an image first');
      return;
    }

    setLoading(true);
    const data = new FormData();
    data.append('file', {
      uri: image.uri,
      type: 'image/jpeg',
      name: 'image.jpg',
    });

    try {
      const response = await fetch('http://127.0.0.1:8000/api/predict/', {
        method: 'POST',
        body: data,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const result = await response.json();
      setPrediction(result.prediction);
    } catch (error) {
      console.error('Error uploading image:', error);
      Alert.alert('Error', 'Failed to upload image');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Capture Image" onPress={captureImage} />
      <Button title="Choose From Gallery" onPress={pickImage} />
      {image && <Image source={image} style={{ width: 200, height: 200 }} />}
      <Button title="Upload Image" onPress={uploadImage} />
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {prediction && <Text style={{ marginTop: 20 }}>{prediction}</Text>}
    </View>
  );
};

export default ImageUploadPage;
