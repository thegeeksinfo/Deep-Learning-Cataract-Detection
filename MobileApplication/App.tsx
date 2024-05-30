import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './src/componets/LandingPage';
import Home from './src/componets/Home';
import Diagnosis from './src/componets/Diagnosis';

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
      </Stack.Navigator> 
    </NavigationContainer>
  );
};

export default App;
