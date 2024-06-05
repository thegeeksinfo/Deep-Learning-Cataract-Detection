import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,StatusBar,Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CameraImage from '../assets/images/phoneimage.png';
import { useNavigation } from '@react-navigation/native';

const LandingPage = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ddd" barStyle="dark-content" />
      <View style={styles.imagecontainer}>
        <Image source={CameraImage} style={styles.image} />
      </View>
      <View>
        <Text style={styles.heading}>
          Cataract Detection App
        </Text>
        <Text style={styles.desctext}>
          This app is designed to help you detect cataracts in eyes.
          It uses a Deap learning model to analyze images of eyes and provide a diagnosis.
        </Text>
        <Text></Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')} >
        <Icon name='arrow-right' style={styles.buttontext} size={30}  color='#fff' />        
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1, 
    flexDirection:"column",
    backgroundColor: '#F9F9FF',
  },
  imagecontainer:{
    marginTop: 10,        
    display: "flex",
    alignItems: "center",        
    height: 300,
  },
  image:{
    width: "100%",
    height: "100%",
  },
  heading:{
    fontSize: 28,
    margin: 10,
    fontWeight: "700",
    textAlign: 'center',
  },
  desctext:{
    marginLeftt:15,
    marginRight:15,
    fontSize: 18,
    margin: 10,
    color: '#000',
    textAlign:'justify'
  },
  buttonContainer:{
    marginTop:'auto',
    marginBottom: 80,
  },
  button:{
    backgroundColor: '#047EEE',
    borderRadius: 40,
    marginLeft: 'auto',
    marginRight: 'auto',
  },  
  buttontext:{
    marginLeft: 'auto',
    padding: 20,
  }

});

export default LandingPage;
