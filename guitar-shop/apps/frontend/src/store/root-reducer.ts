import { combineReducers } from '@reduxjs/toolkit';

import { userData } from './user-data/user-data';
import { NameSpace } from '../conts';

export const rootReducer = combineReducers({
  [NameSpace.User]: userData.reducer,
});
