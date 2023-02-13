import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { BffPaths } from '@guitar-shop/core';
import { AuthUser, LoggedUser, LoginUser } from '@guitar-shop/shared-types';

import { AppDispatch, State } from '../types/state';
import { AuthorizationStatus, NameSpace } from '../conts';
import { dropToken, saveToken } from '../services/token';
import { setAuthorizationStatus, setUser } from './user-data/user-data';

type AsyncThunkConfig = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
};

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
