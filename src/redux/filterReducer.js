import { createReducer } from '@reduxjs/toolkit';
import { filterItems } from './filterAction';

export const filter = createReducer('', {
  [filterItems]: (_, { payload }) => payload,
});
