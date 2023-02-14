import { store } from '../store';
import { AuthorizationStatus } from '../conts';
import { Product } from './product';
import { User } from './user';
import { Comment } from './comment';
import { Order } from './order';

export type UserState = {
  authorizationStatus: AuthorizationStatus;
  user: User | null;
};

export type ProductsState = {
  products: Product[],
  currentProduct: Product | null,
  comments: Comment[]
  isLoading: boolean,
}

export type OrdersState = {
  orders: Order[],
  currentOrder: Order | null,
  isLoading: boolean,
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
