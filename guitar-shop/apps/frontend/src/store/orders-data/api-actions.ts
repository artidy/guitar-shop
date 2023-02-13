import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { BffPaths } from '@guitar-shop/core';
import { CreateOrderProduct, Order } from '@guitar-shop/shared-types';

import { NameSpace } from '../../conts';
import { AsyncThunkConfig } from '../../types/thunk-config';
import {
  addNewOrder,
  setLoading,
  setCurrentOrder,
  setOrders,
  deleteOrder
} from './orders-data';

export const fetchOrders = createAsyncThunk<void, undefined, AsyncThunkConfig>(
  `${NameSpace.Products}/fetchOrders`,
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<Order[]>(BffPaths.Orders);
      dispatch(setOrders(data));
    } catch {
      toast.error('Can\'t fetch products');
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const fetchOrder = createAsyncThunk<void, number, AsyncThunkConfig>(
  `${NameSpace.Products}/fetchOrder`,
  async (id, { dispatch, extra: api }) => {
    dispatch(setLoading(true));
    try {
      const { data } = await api.get<Order>(`${BffPaths.Orders}/${id}`);
      dispatch(setCurrentOrder(data));
    } catch {
      dispatch(setCurrentOrder(null));
      toast.error('Can\'t fetch product');
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const createOrder = createAsyncThunk<void, CreateOrderProduct[], AsyncThunkConfig>(
  `${NameSpace.Products}/createOrder`,
  async (products, { dispatch, extra: api }) => {
    dispatch(setLoading(true));
    try {
      const { data } = await api.post<Order>(`${BffPaths.Orders}`, products);
      dispatch(addNewOrder(data));
    } catch {
      toast.error('Can\'t add product');
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const deleteOrderApi = createAsyncThunk<void, number, AsyncThunkConfig>(
  `${NameSpace.Products}/deleteProduct`,
  async (id, { dispatch, extra: api }) => {
    try {
      await api.delete(`${BffPaths.Orders}/${id}`);
      dispatch(setCurrentOrder(null));
      dispatch(deleteOrder(id));
    } catch {
      throw new Error('Can\'t delete product');
    }
  }
);
