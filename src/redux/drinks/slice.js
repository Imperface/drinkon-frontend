import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addOwnDrinkThunk,
  addFavoriteDrinksThunk,
  getFavoritesDrinksThunk,
  removeFavoriteDrinksThunk,
  getOwnDrinksThunk,
  removeOwnDrinkThunk,
  getDrinkByIdThunk,
  getMainPageDrinksThunk,
  getPopularDrinksThunk,
  getSearchDrinksThunk,
} from './operations';

const initialState = {
  favorites: [],
  own: [],
  byId: {},
  mainPage: [],
  popular: [],
  search: {},
  error: '',
  isLoading: false,
};

const drinksSlice = createSlice({
  name: 'drinks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFavoritesDrinksThunk.fulfilled, (state, { payload }) => {
        state.favorites = payload.drinks;
      })
      .addCase(addFavoriteDrinksThunk.fulfilled, (state, { payload }) => {
        state.favorites.push(payload.drink);
      })
      .addCase(removeFavoriteDrinksThunk.fulfilled, (state, { payload }) => {
        state.favorites = state.favorites.filter(
          (item) => item._id !== payload
        );
      })
      .addCase(getOwnDrinksThunk.fulfilled, (state, { payload }) => {
        state.own = payload;
      })
      .addCase(addOwnDrinkThunk.fulfilled, (state, { payload }) => {
        state.own.push(payload.addedDrink);
      })
      .addCase(removeOwnDrinkThunk.fulfilled, (state, { payload }) => {
        state.own = state.own.filter((item) => item._id !== payload.drink._id);
      })
      .addCase(getDrinkByIdThunk.fulfilled, (state, { payload }) => {
        state.byId = payload;
      })
      .addCase(getMainPageDrinksThunk.fulfilled, (state, { payload }) => {
        state.mainPage = payload;
      })
      .addCase(getPopularDrinksThunk.fulfilled, (state, { payload }) => {
        state.popular = payload.drinks;
      })
      .addCase(getSearchDrinksThunk.fulfilled, (state, { payload }) => {
        state.search = payload;
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

const arrayRequests = [
  getFavoritesDrinksThunk,
  addFavoriteDrinksThunk,
  removeFavoriteDrinksThunk,
  getOwnDrinksThunk,
  addOwnDrinkThunk,
  removeOwnDrinkThunk,
  getDrinkByIdThunk,
  getMainPageDrinksThunk,
  getPopularDrinksThunk,
  getSearchDrinksThunk,
];

const getRequests = (type) => arrayRequests.map((action) => action[type]);

export const drinksReducer = drinksSlice.reducer;
