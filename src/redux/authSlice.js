import { createSlice } from '@reduxjs/toolkit';

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
});

export const { setCredentials, unsetCredentials } = authSlice.actions;
export const selectUser = state => state.auth.user;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export default authSlice.reducer;
