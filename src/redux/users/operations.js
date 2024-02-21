import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://drinkon-backend.onrender.com',
});

const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const cleatAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const signupThunk = createAsyncThunk(
  'users/signup',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await instance.post('/api/users/signup', credentials);
      setToken(data.token);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.statusText);
    }
  }
);
