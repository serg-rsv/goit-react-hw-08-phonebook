import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: builder => ({
    login: builder.mutation({
      query: body => ({
        url: 'users/login',
        method: 'POST',
        body,
      }),
    }),
    signup: builder.mutation({
      query: body => ({
        url: 'users/signup',
        method: 'POST',
        body,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: 'users/logout',
        method: 'POST',
      }),
    }),
  }),
});

export const { useLoginMutation, useSignupMutation, useLogoutMutation } =
  authApi;
