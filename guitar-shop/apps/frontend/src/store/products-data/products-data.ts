import { createSlice } from '@reduxjs/toolkit';

import { ProductsState } from '../../types/state';
import { NameSpace } from '../../conts';

const initialState: ProductsState = {
  products: [],
  currentProduct: null,
  comments: [],
  isLoading: false,
};

export const productsData = createSlice({
  name: NameSpace.Products,
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    addNewProduct: (state, action) => {
      state.products.push(action.payload);
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setProduct: (state, action) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      state.products[index] = action.payload;
    },
    deleteProduct: (state, action) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload
      );
      state.products = [...state.products.slice(0, index), ...state.products.slice(index + 1)];
    },
    setCurrentProduct: (state, action) => {
      state.currentProduct = action.payload;
    },
    setComments: (state, action) => {
      state.comments = action.payload;
    },
    addComment: (state, action) => {
      state.comments.push(action.payload);
    },
  },
});

export const {
  setProducts,
  addNewProduct,
  setLoading,
  setProduct,
  deleteProduct,
  setCurrentProduct,
  setComments,
  addComment
} = productsData.actions;
