import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getCategoryThunk,
  getGlassesThunk,
  getIngredientsThunk,
} from './operations';

const initialState = {
  categories: [],
  glasses: [],
  ingredients: [],
  error: '',
  isLoading: false,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategoryThunk.fulfilled, (state, { payload }) => {
        state.categories = payload.category;
      })
      .addCase(getGlassesThunk.fulfilled, (state, { payload }) => {
        state.glasses = payload.glasses;
      })
      .addCase(getIngredientsThunk.fulfilled, (state, { payload }) => {
        state.ingredients = payload.ingredients;
      })
      .addMatcher(isAnyOf(...getRequests('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...getRequests('pending')), handlePending)
      .addMatcher(isAnyOf(...getRequests('rejected')), handleRejected);
  },
});

const handleFulfilled = (state) => {
  state.isLoading = false;
  state.error = '';
};
const handlePending = (state, action) => {
  state.isLoading = true;
  state.error = '';
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const arrayRequests = [getCategoryThunk, getGlassesThunk, getIngredientsThunk];

const getRequests = (type) => arrayRequests.map((action) => action[type]);

export const filtersReducer = filtersSlice.reducer;
