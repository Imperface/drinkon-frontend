import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://drinkon-backend.onrender.com';

const fetchGetFavorite = async () => {
  const response = await axios.get('/api/drinks/favorite');
  return response.data;
};

const fetchAddFavorite = async (data) => {
  const response = await axios.post('/api/drinks/favorite/add', data);
  return response.data;
};

const fetchDeleteFavorite = async (id) => {
  const response = await axios.delete(`/api/drinks/favorite/remove/${id}`);
  return response.data;
};

export const getFavorites = createAsyncThunk(
  'favorites/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchGetFavorite();
      return data;
    } catch (error) {
      return rejectWithValue({
        message: error.message,
        status: error.response.status,
      });
    }
  }
);

export const addFavorite = createAsyncThunk(
  'favorites/addFavorite',
  async (requestData, { rejectWithValue }) => {
    try {
      const data = await fetchAddFavorite(requestData);
      return data;
    } catch (error) {
      return rejectWithValue({
        message: error.message,
        status: error.response.status,
      });
    }
  }
);

export const deleteFavorite = createAsyncThunk(
  'favorites/deleteFavorite',
  async (id, { rejectWithValue }) => {
    try {
      return await fetchDeleteFavorite(id);
    } catch (error) {
      return rejectWithValue({
        message: error.message,
        status: error.response.status,
      });
    }
  }
);
