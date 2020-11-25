import { AuthActions, AuthActionTypes } from './auth.actions';
import produce from 'immer';

export const authFeatureKey = 'auth';

export interface AuthState {
  loading: boolean;
  user: any;
}

export const initialState: AuthState = {
  loading: false,
  user: null,
};

export interface AuthPartialState {
  readonly [authFeatureKey]: AuthState;
}

export function reducer(
  state: AuthState = initialState,
  action: AuthActions
): AuthState {
  switch (action.type) {
    case AuthActionTypes.Login:
      return produce<AuthState>(state, (newState) => {
        newState.loading = true;
      });
    case AuthActionTypes.LoginSuccess:
      return produce<AuthState>(state, (newState) => {
        newState.loading = false;
        newState.user = action.payload;
      });
    case AuthActionTypes.LoginError:
      return produce<AuthState>(state, (newState) => {
        newState.loading = false;
      });
    default:
      return state;
  }
}
