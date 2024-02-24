import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';
import { instance } from '../users/operations';

export const subscribesEmailThunk = createAsyncThunk(
  '/subscribes',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await instance.post('api/subscribes', {
        email: credentials,
      });
      Notify.success(`${credentials} successfully added to subscribe `);

      return data;
    } catch (error) {
      Notify.failure(`${error.response.data.message} `);

      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
