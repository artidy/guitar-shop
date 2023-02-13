import { createSelector } from '@reduxjs/toolkit';
import { User } from '@guitar-shop/shared-types';

import { State, UserState } from '../../types/state';
import { AuthorizationStatus, NameSpace } from '../../conts';

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

export const getIsAuthor = createSelector(
  [getUser, (_, commentUser: User | undefined) => commentUser],
  (user, commentUser) => user && commentUser && user.email === commentUser.email
);
