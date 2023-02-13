import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { BffPaths } from '@guitar-shop/core';
import { AuthUser, LoggedUser, LoginUser, NewUser } from '@guitar-shop/shared-types';

import { AuthorizationStatus, NameSpace } from '../../conts';
import { dropToken, saveToken } from '../../services/token';
import { setAuthorizationStatus, setUser } from './user-data';
import { AsyncThunkConfig } from '../../types/thunk-config';

export const checkAuth = createAsyncThunk<void, undefined, AsyncThunkConfig>(
  `${NameSpace.User}/checkAuth`,
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<AuthUser>(BffPaths.Users);
      dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
      dispatch(setUser(data));
    } catch {
      dropToken();
      dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
      dispatch(setUser(null));
    }
  }
);

export const login = createAsyncThunk<void, LoginUser, AsyncThunkConfig>(
  `${NameSpace.User}/login`,
  async (authData, { dispatch, extra: api }) => {
    try {
      const {data} = await api.post<LoggedUser>(`${BffPaths.Users}/login`, authData);
      saveToken(data.accessToken);
      dispatch(checkAuth());
    } catch {
      toast.error('Can\'t login');
    }
  }
);

export const registerUser = createAsyncThunk<void, NewUser, AsyncThunkConfig>(
  `${NameSpace.User}/register`,
  async (userData, { extra: api }) => {

    try {
      await api.post<AuthUser>(`${BffPaths.Users}/register`, userData);
    } catch {
      throw new Error('Can\'t sign up');
    }
  }
);
