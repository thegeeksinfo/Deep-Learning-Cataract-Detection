import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native';
import logo from '../../assets/images/cataract_logo.jpg';
import styles from '../../assets/styles/styles';
import { useNavigation } from '@react-navigation/native';

function Header() {

  const navigation = useNavigation();
  
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.headerText}>back</Text>
      </TouchableOpacity>
      <Image
        style={{ width: 40, height: 40, margin: 10 }}
        source={logo}
      />
      <Text style={{ color: 'white', padding: 5, fontSize: 15 }}>BSE24-24</Text>

    </View>
  )
}

export default Header