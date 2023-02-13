import { createSelector } from '@reduxjs/toolkit';

import { ProductsState, State } from '../../types/state';
import { NameSpace } from '../../conts';

export const getProducts = createSelector(
  (state: State) => state[NameSpace.Products],
  (state: ProductsState) => state.products
);

export const getCurrentProduct = createSelector(
  (state: State) => state[NameSpace.Products],
  (state: ProductsState) => state.currentProduct
);

export const getIsLoading = createSelector(
  (state: State) => state[NameSpace.Products],
  (state: ProductsState) => state.isLoading
);
