import { createFeatureSelector, createSelector } from '@ngrx/store';
import { authFeatureKey, AuthState } from './auth.reducer';

const getAuthState = createFeatureSelector<AuthState>(authFeatureKey);

const getLoading = createSelector(
  getAuthState,
  (state: AuthState) => state.loading
);

const getUser = createSelector(
  getAuthState,
  (state: AuthState) => state.user
);

export const authQuerry = {
  getLoading,
  getUser,
};
