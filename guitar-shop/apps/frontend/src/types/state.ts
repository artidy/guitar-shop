import { Product, User } from '@guitar-shop/shared-types';

import { store } from '../store';
import { AuthorizationStatus } from '../conts';

export type UserState = {
  authorizationStatus: AuthorizationStatus;
  user: User | null;
};

export type ProductsState = {
  products: Product[],
  currentProduct: Product | null,
  isLoading: boolean,
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
