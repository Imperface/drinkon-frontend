import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { subscribesEmailThunk } from './operations';

const initialState = {
  subscribes: [],
  error: '',
  isLoading: false,
};

const subscribesSlice = createSlice({
  name: 'subscribes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(subscribesEmailThunk.fulfilled, (state, { payload }) => {
        state.subscribes.push(payload.user.email);
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

const arrayRequests = [subscribesEmailThunk];

const getRequests = (type) => arrayRequests.map((action) => action[type]);

export const subscribesReducer = subscribesSlice.reducer;
