import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { BffPaths, NameSpace } from '../../conts';
import { AsyncThunkConfig } from '../../types/thunk-config';
import {
  addComment,
  addNewProduct, deleteProduct,
  setComments,
  setCurrentProduct,
  setLoading,
  setProduct,
  setProducts
} from './products-data';
import { Product, UpdateProduct } from '../../types/product';
import { Comment, CreateComment } from '../../types/comment';

export const fetchProducts = createAsyncThunk<void, undefined, AsyncThunkConfig>(
  `${NameSpace.Products}/fetchProducts`,
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<Product[]>(BffPaths.Products);
      dispatch(setProducts(data));
    } catch {
      toast.error('Can\'t fetch products');
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const fetchProduct = createAsyncThunk<void, number, AsyncThunkConfig>(
  `${NameSpace.Products}/fetchProduct`,
  async (id, { dispatch, extra: api }) => {
    try {
      dispatch(setLoading(true));
      const { data } = await api.get<Product>(`${BffPaths.Products}/${id}`);
      const { data: comments } = await api.get<Comment[]>(`${BffPaths.Comments}/${id}`);
      dispatch(setCurrentProduct(data));
      dispatch(setComments(comments));
    } catch {
      dispatch(setCurrentProduct(null));
      dispatch(setComments([]));
      toast.error('Can\'t fetch product');
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const createProduct = createAsyncThunk<void, Product, AsyncThunkConfig>(
  `${NameSpace.Products}/createProduct`,
  async (product, { dispatch, extra: api }) => {
    dispatch(setLoading(true));
    try {
      const { data } = await api.post<Product>(`${BffPaths.Products}`, product);
      dispatch(addNewProduct(data));
    } catch {
      toast.error('Can\'t add product');
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const editProduct = createAsyncThunk<void, UpdateProduct, AsyncThunkConfig>(
  `${NameSpace.Products}/editProduct`,
  async (product, { dispatch, extra: api }) => {
    try {
      dispatch(setLoading(true));
      const { data } = await api.patch<Product>(`${BffPaths.Products}/${product.id}`, product);
      dispatch(setProduct(data));
      dispatch(setCurrentProduct(data));
      toast.success('Edit was successful');
    } catch {
      toast.error('Can\'t edit product');
    } finally {
      dispatch(setLoading(false));
    }
  }
);

export const deleteProductApi = createAsyncThunk<void, number, AsyncThunkConfig>(
  `${NameSpace.Products}/deleteProduct`,
  async (id, { dispatch, extra: api }) => {
    try {
      await api.delete(`${BffPaths.Products}/${id}`);
      dispatch(setCurrentProduct(null));
      dispatch(deleteProduct(id));
    } catch {
      throw new Error('Can\'t delete product');
    }
  }
);

export const createComment = createAsyncThunk<void, CreateComment, AsyncThunkConfig>(
  `${NameSpace.Products}/addComment`,
  async (comment, { dispatch, extra: api }) => {
    dispatch(setLoading(true));
    try {
      const { data } = await api.post<Comment>(`${BffPaths.Comments}`, comment);
      dispatch(addComment(data));
    } catch {
      toast.error('Can\'t fetch products');
    } finally {
      dispatch(setLoading(false));
    }
  }
);
