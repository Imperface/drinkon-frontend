import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  refreshThunk,
  signinThunk,
  signoutThunk,
  signupThunk,
  updateUserThunk,
} from './operations';

const initialState = {
  user: { email: '', name: '', avatarURL: '', _id: '' },
  token: '',
  isSignin: false,
  error: '',
  isLoading: false,
};
const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signupThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isSignin = true;
      })
      .addCase(signinThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isSignin = true;
      })
      .addCase(signoutThunk.fulfilled, (state) => {
        state.user = { name: '', email: '', avatarURL: '', _id: '' };
        state.token = '';
        state.isSignin = false;
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isSignin = true;
      })
      .addCase(updateUserThunk.fulfilled, (state, { payload }) => {
        state.user = { ...state.user, ...payload };
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
  signupThunk,
  signinThunk,
  signoutThunk,
  refreshThunk,
  updateUserThunk,
];

const getRequests = (type) => arrayRequests.map((action) => action[type]);

export const userReducer = userSlice.reducer;
