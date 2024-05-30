import React, { useState } from 'react';
import { Button, View, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';

const ImageUploadPage = () => {
  const [image, setImage] = useState(null);

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

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Capture Image" onPress={captureImage} />
      <Button title="Choose From Gallery" onPress={pickImage} />
      {image && <Image source={image} style={{ width: 200, height: 200 }} />}
    </View>
  );
};

export default ImageUploadPage;
