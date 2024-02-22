import { createAsyncThunk } from '@reduxjs/toolkit';

import { instance } from '../users/operations';

export const getCategoryThunk = createAsyncThunk(
  'filters/category',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await instance.get(
        '/api/filters/categories',
        credentials
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getGlassesThunk = createAsyncThunk(
  'filters/glasses',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await instance.get('/api/filters/glasses', credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getIngredientsThunk = createAsyncThunk(
  'filters/ingredients',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await instance.get(
        '/api/filters/ingredients',
        credentials
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
