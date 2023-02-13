import { createSlice } from '@reduxjs/toolkit';

import { OrdersState } from '../../types/state';
import { NameSpace } from '../../conts';

const initialState: OrdersState = {
  orders: [],
  currentOrder: null,
  isLoading: false,
};

export const ordersData = createSlice({
  name: NameSpace.Products,
  initialState,
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
    addNewOrder: (state, action) => {
      state.orders.push(action.payload);
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    deleteOrder: (state, action) => {
      const index = state.orders.findIndex(
        (order) => order.id === action.payload
      );
      state.orders = [...state.orders.slice(0, index), ...state.orders.slice(index + 1)];
    },
    setCurrentOrder: (state, action) => {
      state.currentOrder = action.payload;
    },
  },
});

export const {
  setOrders,
  addNewOrder,
  setLoading,
  deleteOrder,
  setCurrentOrder,
} = ordersData.actions;
