import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './src/componets/LandingPage';
import Home from './src/componets/Home';
import Diagnosis from './src/componets/Diagnosis';
import FAQ from "./src/componets/FAQ";
import Guide from "./src/componets/Guide";

// import ImagePicker from 'react-native-image-picker';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="LandingPage"
          screenOptions={{ headerShown: false }} >
          <Stack.Screen name="LandingPage" component={LandingPage} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Diagnosis" component={Diagnosis} />
          <Stack.Screen name="Guide" component={Guide} />
          <Stack.Screen name="Faq" component={FAQ} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
