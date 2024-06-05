import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from "../../assets/styles/bottommenu";
import Icon from 'react-native-vector-icons/FontAwesome';


const BotoomMenu = ({ activeTab }) => {
    const navigation = useNavigation();

    const isActive = (tabName) => {
        return tabName === activeTab;
    };

    return (
        <View style={styles.bottommenucontainer}>
            <TouchableOpacity style={[styles.button, isActive('Home')? {backgroundColor: '#007AFF'} : {}]}
             onPress={() => navigation.navigate('Home')}>
                <Icon name='home' size={30}  color='#000' />
                <Text style={styles.buttonText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={[styles.button, isActive('Guide')? {backgroundColor: '#007AFF'} : {}]}
             onPress={() => navigation.navigate('Guide')}>
                <Icon name='book' size={30} color='#000' />
                <Text style={styles.buttonText}>Guide</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={[styles.button, isActive('Faq')? {backgroundColor: '#007AFF'} : {}]}
             onPress={() => navigation.navigate('Faq')}>
                <Icon name='question-circle' size={30} color='#000' />
                <Text style={styles.buttonText}>FAQ</Text>
            </TouchableOpacity>
        </View>
    );
}


export default BotoomMenu;