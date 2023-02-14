import { createSelector } from '@reduxjs/toolkit';

import { State, UserState } from '../../types/state';
import { AuthorizationStatus, NameSpace } from '../../conts';
import { UserRole } from '../../types/user';

export const getAuthorizationStatus = createSelector(
  (state: State) => state[NameSpace.User],
  (state: UserState) => state.authorizationStatus
);

export const getUser = createSelector(
  (state: State) => state[NameSpace.User],
  (state: UserState) => state.user
);

export const getIsAuth = createSelector(
  getAuthorizationStatus,
  (authorizationStatus: AuthorizationStatus) =>
    authorizationStatus === AuthorizationStatus.Auth
);

export const getIsUnknown = createSelector(
  getAuthorizationStatus,
  (authorizationStatus: AuthorizationStatus) =>
    authorizationStatus === AuthorizationStatus.Unknown
);

export const getIsAdmin = createSelector(
  (state: State) => state[NameSpace.User],
  (state: UserState) => state.user?.role === UserRole.Admin
);
