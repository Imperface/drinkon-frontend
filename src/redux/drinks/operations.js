import { createAsyncThunk } from '@reduxjs/toolkit';

import { instance } from '../users/operations';

export const getFavoritesDrinksThunk = createAsyncThunk(
  'drinks/favorites',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await instance.get('/api/drinks/favorite');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const addFavoriteDrinksThunk = createAsyncThunk(
  'drinks/addFavorite',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await instance.post('/api/drinks/favorite/add', {
        _id: credentials,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const removeFavoriteDrinksThunk = createAsyncThunk(
  'drinks/removeFavorite',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await instance.delete(
        `/api/drinks/favorite/remove/${credentials}`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getOwnDrinksThunk = createAsyncThunk(
  'drinks/getOwnDrinks',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await instance.get('/api/drinks/own');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const addOwnDrinkThunk = createAsyncThunk(
  'drinks/addOwnDrink',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await instance.post('/api/drinks/own/add', credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const removeOwnDrinkThunk = createAsyncThunk(
  'drinks/removeOwnDrink',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await instance.delete(
        `/api/drinks/own/remove/${credentials}`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getDrinkByIdThunk = createAsyncThunk(
  'drinks/getDrinkById',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await instance.get(`/api/drinks/${credentials}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getMainPageDrinksThunk = createAsyncThunk(
  'drinks/getMainPageDrinks',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await instance.get('/api/drinks/main-page');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getPopularDrinksThunk = createAsyncThunk(
  'drinks/getPopularDrinks',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await instance.get('/api/drinks/popular');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getSearchDrinksThunk = createAsyncThunk(
  'drinks/getSearchDrinks',
  async (
    { category = '', ingredientId = '', query = '', page = '', limit = '' },
    thunkAPI
  ) => {
    try {
      const { data } = await instance.get(
        `/api/drinks/search?category=${category}&ingredientId=${ingredientId}&query=${query}&page${page}&limit${limit}`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
