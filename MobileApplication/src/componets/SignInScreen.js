import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import api from '../api/api';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      const response = await api.login(email, password);
      console.log('Login Success:', response.data);
      // Handle successful login (e.g., navigate to another screen)
    } catch (error) {
      console.log('Login Error:', error.response.data);
    }
  };

  return (
    <View>
      <Text>Sign In</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Sign In" onPress={handleSignIn} />
    </View>
  );
};

export default SignInScreen;
