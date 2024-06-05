import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'http://127.0.0.1:8000/';

const register = async (email, username, password) => {
  return axios.post(`${API_URL}/api/accounts/register/`, {
    email,
    username,
    password,
  });
};

const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/api/accounts/login/`, {
    email,
    password,
  });
  const token = response.data.token;
  await AsyncStorage.setItem('userToken', token);
  return response;
};

const getAuthToken = async () => {
  return await AsyncStorage.getItem('userToken');
};

const apiRequest = async (endpoint, method = 'GET', data = null) => {
  const token = await getAuthToken();
  const config = {
    method,
    url: `${API_URL}${endpoint}`,
    headers: {
      'Authorization': `Token ${token}`,
      'Content-Type': 'application/json',
    },
    data,
  };
  return axios(config);
};

export default {
  register,
  login,
  apiRequest,
};
