import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Button, PermissionsAndroid, Platform, StyleSheet } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import ImageCropPicker from 'react-native-image-crop-picker';
import placeholderImage from "../assets/images/eye2.jpg";
import Header from './reusable/Header';
import BotoomMenu from './reusable/BottomMenu';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';


const Home = () => {
  const [imageUri, setImageUri] = useState(null);
  const [showUploadButton, setShowUploadButton] = useState(true);
  const navigation = useNavigation();

  const requestPermissions = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.CAMERA,
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        ]);
        if (
          granted[PermissionsAndroid.PERMISSIONS.CAMERA] === PermissionsAndroid.RESULTS.GRANTED &&
          granted[PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE] === PermissionsAndroid.RESULTS.GRANTED &&
          granted[PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE] === PermissionsAndroid.RESULTS.GRANTED
        ) {
          console.log('You can use the camera and storage');
        } else {
          console.log('Camera and storage permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  const chooseFromGallery = () => {
    launchImageLibrary({}, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        cropImage(response.assets[0].uri);
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
        cropImage(response.assets[0].uri);
      }
    });
  };

  const cropImage = (uri) => {
    ImageCropPicker.openCropper({
      path: uri,
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setImageUri(image.path);
      setShowUploadButton(false);
    }).catch(error => {
      console.log('Error cropping image: ', error);
    });
  };

  const uploadImage = () => {
    // Implement image upload logic here
    console.log('Uploading:', imageUri);
    navigation.navigate('Diagnosis');

    // Reset state to show original buttons
    setImageUri(null);
    setShowUploadButton(true);
  };

  const rejectImage = () => {
    // Reset state to show original buttons
    setImageUri(null);
    setShowUploadButton(true);
  };

  React.useEffect(() => {
    requestPermissions();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.contents}>
        {imageUri ? (
          <View>
            {/* <Text style={styles.title}>Verify Desired Image</Text> */}
            <View style={styles.imagecontainer}>
              <Image
                source={{ uri: imageUri }}
                style={styles.image}
                resizeMode="cover" />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.diagonosis} onPress={uploadImage}>
                <Text style={styles.btntxt}>Run Diagnosis</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.reject} onPress={rejectImage}>
                <Text style={styles.btntxt}>change image</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <>
            <View style={styles.imagecontainer}>
              <Image
                source={placeholderImage}
                style={styles.image}
                resizeMode="cover" />
            </View>
            <View style={styles.cards}>
              <TouchableOpacity style={styles.card} onPress={chooseFromGallery}>
                <View style={styles.cardchild}>
                  <Icons name='view-gallery' size={30} color='#242323' />
                  <View style={styles.txts}>
                    <Text style={styles.cardh}>Select from Gallery</Text>
                    <Text style={styles.cardp}>Choose this option to pick an image from your device’s photo gallery.</Text>
                  </View>
                </View>
                <Button title='Choose From Gallery' style={styles.button} onPress={chooseFromGallery} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.card} onPress={captureImage}>
                <View style={styles.cardchild}>
                  <Icon name='camera' size={30} color='#242323' />
                  <View style={styles.txts}>
                    <Text style={styles.cardh}>Use Camera</Text>
                    <Text style={styles.cardp}>Choose this option to take a new photo using your device’s camera.</Text>
                  </View>
                </View>
                <Button title='Capture Image' style={styles.button} onPress={captureImage} />
              </TouchableOpacity>
            </View>
          </>
        )}

      </View>
      <BotoomMenu />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  contents: {
    marginLeft: 10,
    marginRight: 10,
  },
  imagecontainer: {
    marginTop: 10,
    display: "flex",
    alignItems: "center",
    height: 300,


  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },

  title: {
    fontSize: 28,
    margin: 10,
    fontWeight: "700"
  },
  button: {
    marginTop: 10,
    backgroundColor: '#5AC8FA',
    borderRadius: 10,
    padding: 8
  },

  cards: {
    display: "flex",
    width: "100%",
    marginTop: 10,
    marginBottom: 10
  },
  card: {
    borderBlockColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 10,
    padding: 10,

  },
  cardchild:{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardh: {
    fontSize: 20,
    fontWeight: "700",
    color: "#000"
  },
  cardp: {
    fontSize: 16,
    color: "#000"
  },

  buttonContainer: {
    margin: 10
  },
  diagonosis: {
    backgroundColor: '#5AC8FA',
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  reject: {
    backgroundColor: '#FF453A',
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 15,
  },
  btntxt: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700"
  },
  txts: {
    marginLeft: 10,
    width: "80%",
    marginBottom: 5,
  }



  
});

export default Home;
