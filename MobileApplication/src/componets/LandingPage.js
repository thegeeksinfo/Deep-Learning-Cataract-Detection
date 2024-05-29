import React from 'react';
import { Button,Text,Image, View, StyleSheet,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Eye1 from '../assets/images/eye1.jpg';
import Header from './reusable/StartHeader';
import styles from '../assets/styles/styles';

const LandingPage = () => {
  const navigation = useNavigation();

  return (
    <>
      {/* <Header /> */}
      <View style={styles.container2}>
        <Text style={styles.title}>Cataract Detection System</Text>
        <Image source={Eye1} style={styles.img} />
        <Text style={styles.login}>An improved way of detecting cataracts.</Text>
        <Text style={styles.login}> Login to get Started👉🏾</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};


export default LandingPage;