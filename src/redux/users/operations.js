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
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const signinThunk = createAsyncThunk(
  'users/signin',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await instance.post('/api/users/signin', credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const signoutThunk = createAsyncThunk(
  'users/signout',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await instance.post('/api/users/signout');
      cleatAuthHeader();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  'users/refresh',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.users.token;
      setToken(token);
      const { data } = await instance.get('/api/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const state = thunkAPI.getState();
      const token = state.users.token;
      if (!token) {
        return false;
      }
      return true;
    },
  }
);

export const updateUserThunk = createAsyncThunk(
  'users/update',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await instance.patch('/api/users/update', credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: error.response.data.message,
        status: error.response.status,
      });
    }
  }
);
