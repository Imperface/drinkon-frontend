import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getFavorites,
  addFavorite,
  deleteFavorite,
} from './favoritesOperations';

const initialState = {
  favorites: [],
  isLoading: false,
  error: null,
};

const favoritesState = createSlice({
  name: 'favorites',
  initialState,

  reducers: {},

  extraReducers: (builder) =>
    builder
      .addCase(getFavorites.fulfilled, (state, action) => {
        state.favorites = action.payload;
      })
      .addCase(addFavorite.fulfilled, (state, action) => {
        state.favorites.push(action.payload);
      })
      .addCase(deleteFavorite.fulfilled, (state, action) => {
        state.favorites = state.favorites.filter(
          (favorite) => favorite.id !== action.payload.id
        );
      })
      .addMatcher(isAnyOf(...getRequests('pending')), handlePending)
      .addMatcher(isAnyOf(...getRequests('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...getRequests('rejected')), handleRejected),
});

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleFulfilled = (state) => {
  state.isLoading = false;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const arrayRequests = [getFavorites, addFavorite, deleteFavorite];

const getRequests = (type) => arrayRequests.map((action) => action[type]);

export const favoritesReducer = favoritesState.reducer;
