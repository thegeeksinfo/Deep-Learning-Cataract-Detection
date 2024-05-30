import React from 'react'
import Header from './reusable/Header'
import { Button, Image, Text, View,TouchableOpacity } from 'react-native'
import eye2 from '../assets/images/eye2.jpg'
import styles from '../assets/styles/styles'
import { useNavigation } from '@react-navigation/native'

function Diagnosis() {
    const navigation = useNavigation();
    return (
        <>
            <Header />
            <View style={styles.container2}>
                <Text style={styles.title}>Results</Text>
                <Image 
                source={eye2} 
                style={styles.imgDiagnosis} 
                placeholder={eye2} />
                
                <Text style={styles.conclusion}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, non eum quibusdam necessitatibus qui nemo eveniet odio at amet commodi dicta ab delectus modi debitis odit aperiam consectetur quod sit.</Text>
                {/* <Button style={styles.homeButton} title='Back to home' onPress={() => NavigationPreloadManager.navigate('Home')} /> */}
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.homeButton} onPress={() => navigation.navigate('Home')}>Back to Home</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default Diagnosis