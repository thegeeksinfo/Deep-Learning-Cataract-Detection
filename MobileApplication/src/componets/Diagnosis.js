import React from 'react'
import Header from './reusable/Header'
import { Image, Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import eye2 from '../assets/images/eye2.jpg'
import { useNavigation } from '@react-navigation/native'
import BotoomMenu from './reusable/BottomMenu'
import Icon from 'react-native-vector-icons/Entypo';

const Diagnosis = () => {
    const navigation = useNavigation();
    return (
        <>
            <Header />
            <View style={styles.container2}>
                <Text style={styles.title}>Visualizing Results</Text>
                <View style={styles.imgContainer}>
                    <Image
                        source={eye2}
                        style={styles.imgDiagnosis}
                        placeholder={eye2} />
                </View>

                <Text style={styles.leble}>Results</Text>
                <Text style={styles.conclusion}>No Cataracts Detected</Text>
                <View style={styles.buttoncont}>
                    <TouchableOpacity style={styles.buttonback}>
                        <Text style={styles.backtxt} onPress={() => navigation.navigate('Home')}>Back</Text>
                        <Icon name='back' size={30} color='#1e90ff' />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttondone}>
                        <Text style={styles.donetxt} onPress={() => navigation.navigate('LandingPage')}>Done </Text>
                        <Icon name='thumbs-up' size={30} color='#03AA50' />
                    </TouchableOpacity>
                </View>
            </View>
            <BotoomMenu />
        </>
    )
}

const styles = StyleSheet.create({
    container2: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        margin: 10,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    imgContainer: {
        height: 300,
        marginBottom: 20,

    },
    imgDiagnosis: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    conclusion: {
        fontSize: 35,
        marginBottom: 20,
        marginTop: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#1e90ff',
    },
    buttoncont: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    buttonback: {
        display: 'flex',
        borderRadius: 10,
        padding: 5,
        width: '48%',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        borderColor: '#1e90ff',
        borderWidth: 2,
    },
    backtxt: {
        color: '#1e90ff',
        fontWeight: 'bold',
        fontSize: 20,
        paddingRight: 5,
    },

    buttondone: {
        display: 'flex',
        borderRadius: 10,
        width: '48%',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        borderColor: '#03AA50',
        borderWidth: 2,
    },
    donetxt: {
        color: '#03AA50',
        fontWeight: 'bold',
        fontSize: 20,
        paddingRight: 5,
    },

    homeButton: {
        color: 'white',
        fontWeight: 'bold',
    },
    leble: {
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontFamily: 'sans-serif-light',
        marginBottom: 10,
        textAlign: 'center',
    },

});

export default Diagnosis