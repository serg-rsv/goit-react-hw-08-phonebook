import { createSlice } from '@reduxjs/toolkit';

import { authApi } from 'redux/authApi';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, { payload: { user, token } }) => {
      state.user = user;
      state.token = token;
      state.isLoggedIn = true;
    },
    unsetCredentials: state => {
      state.user = initialState.user;
      state.token = initialState.token;
      state.isLoggedIn = initialState.isLoggedIn;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      authApi.endpoints.currentUser.matchFulfilled,
      (state, { payload }) => {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.isLoggedIn = true;
      }
    );
    builder.addMatcher(
      authApi.endpoints.currentUser.matchRejected,
      (state, { payload }) => {
        if (payload?.status === 401) {
          state.token = '';
          state.isLoggedIn = false;
        }
      }
    );
  },
});

export const { setCredentials, unsetCredentials } = authSlice.actions;
export const selectUser = state => state.auth.user;
export const selectToken = state => state.auth.token;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export default authSlice.reducer;
