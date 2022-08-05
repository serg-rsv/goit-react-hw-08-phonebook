import { createReducer } from '@reduxjs/toolkit';
import { filterItems } from './contacts-action';

export const filter = createReducer('', {
  [filterItems]: (_, { payload }) => payload,
});
