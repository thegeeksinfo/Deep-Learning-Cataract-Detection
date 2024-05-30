import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image,Button } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import placeholderImage from "../assets/images/eye2.jpg";
import Header from './reusable/Header';
import styles from '../assets/styles/styles';

const Home = () => {

  const [imageUri, setImageUri] = useState(null);
  const [showUploadButton, setShowUploadButton] = useState(true);

  const chooseFromGallery = () => {
    launchImageLibrary({}, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setImageUri(response.uri);
        setShowUploadButton(false); // Switch to upload/reject buttons
      }
    });
  };

  const captureImage = () => {
    launchCamera({}, (response) => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.error) {
        console.log('Camera Error: ', response.error);
      } else {
        setImageUri(response.uri);
        setShowUploadButton(false); // Switch to upload/reject buttons
      }
    });
  };

  const uploadImage = () => {
    // Implement image upload logic here
    console.log('Uploading:', imageUri);
    // Reset state to show original buttons
    setImageUri(null);
    setShowUploadButton(true);
  };

  const rejectImage = () => {
    // Reset state to show original buttons
    setImageUri(null);
    setShowUploadButton(true);
  };

  return (
    <>
      <Header />
      <View style={styles.container2}>
        {imageUri? (
          <View>
            <Text style={styles.title}>Verify Desired Image</Text>

            <Image
              source={{ uri: imageUri }}
              style={styles.imgDiagnosis}
              resizeMode="cover" />

<TouchableOpacity  style={styles.button} onPress={uploadImage}>
            <Text>Run Diagnosis</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={styles.button} onPress={rejectImage}>
            <Text>Reject</Text>
          </TouchableOpacity>
          </View>
        ): (
          <>
              <Text style={styles.title}>Upload image here</Text>
          <Image
              source={placeholderImage}
              style={styles.imgDiagnosis}
              resizeMode="cover" />
          <Button title="Choose From Gallery" onPress={chooseFromGallery} />
          <Button title="Capture Image" onPress={captureImage} />
          </>

        )}
      </View>
    </>

  );
};

export default Home;
