import { combineReducers } from '@reduxjs/toolkit';

import { NameSpace } from '../conts';
import { userData } from './user-data/user-data';
import { productsData } from './products-data/products-data';

export const rootReducer = combineReducers({
  [NameSpace.User]: userData.reducer,
  [NameSpace.Products]: productsData.reducer,
});
