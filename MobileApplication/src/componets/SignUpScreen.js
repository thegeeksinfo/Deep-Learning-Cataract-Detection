import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import api from '../api/api';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await api.register(email, username, password);
      console.log('Registration Success:', response.data);
      // Handle successful registration (e.g., navigate to another screen)
    } catch (error) {
      console.log('Registration Error:', error.response.data);
    }
  };

  return (
    <View>
      <Text>Sign Up</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Username" value={username} onChangeText={setUsername} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
};

export default SignUpScreen;