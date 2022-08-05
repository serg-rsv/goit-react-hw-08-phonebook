import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactsApi';
import { filter } from './contact-reducer';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
