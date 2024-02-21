import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { signupThunk } from './operations';

const initialState = {
  user: { email: '' },
  token: '',
  isSignup: false,
  error: '',
  isLoading: false,
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signupThunk.fulfilled, (state, { payload }) => {
        return {
          ...state,
          user: { email: payload.user.email },
          token: payload.token,
          isSignup: true,
        };
      })
      .addMatcher(isAnyOf(signupThunk.pending), (state, { payload }) => {
        return {
          ...state,
          isLoading: true,
          error: '',
        };
      })
      .addMatcher(isAnyOf(signupThunk.rejected), (state, { payload }) => {
        return {
          ...state,
          isLoading: false,
          error: payload,
        };
      });
  },
});

export const userReducer = userSlice.reducer;
