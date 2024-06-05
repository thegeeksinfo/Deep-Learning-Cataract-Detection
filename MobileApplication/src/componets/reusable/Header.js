import React from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import logo from '../../assets/images/cataract_logo_nobg.png';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StatusBar } from 'react-native';


function Header() {

  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <StatusBar backgroundColor="#047EEE" />
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={20} color="#fff" />
      </TouchableOpacity>
      <View style={styles.logocontainer}>
        <Image
          style={styles.logoimage}
          source={logo}
        />
        <Text style={styles.headertxt}>Cataracts Detection</Text>

      </View>


    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    backgroundColor: '#047EEE',
    padding: 10
  },
  logocontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  logoimage: {
    width: 60,
    height: 60,
  },
  headertxt: {
    fontSize: 20,
    color: '#fff',
  }
})

export default Header