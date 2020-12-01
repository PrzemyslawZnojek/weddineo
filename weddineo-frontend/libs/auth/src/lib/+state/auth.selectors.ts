import { createFeatureSelector, createSelector } from '@ngrx/store';
import { authFeatureKey, AuthState } from './auth.reducer';

const getAuthState = createFeatureSelector<AuthState>(authFeatureKey);

const getLoading = createSelector(
  getAuthState,
  (state: AuthState) => state.loading
);

const getUserToken = createSelector(
  getAuthState,
  (state: AuthState) => state.userToken
);

export const authQuerry = {
  getLoading,
  getUserToken,
};
