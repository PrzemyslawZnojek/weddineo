import { AuthActions, AuthActionTypes } from './auth.actions';
import produce from 'immer';

export const authFeatureKey = 'auth';

export interface AuthState {
  loading: boolean;
  userToken: string;
}

export const initialState: AuthState = {
  loading: false,
  userToken: null,
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
    case AuthActionTypes.Register:
      return produce<AuthState>(state, (newState) => {
        newState.loading = true;
      });
    case AuthActionTypes.LoginSuccess:
      return produce<AuthState>(state, (newState) => {
        newState.loading = false;
        newState.userToken = action.payload;
      });
    case AuthActionTypes.RegisterSuccess:
      return produce<AuthState>(state, (newState) => {
        newState.loading = false;
      });
    case AuthActionTypes.LoginError:
    case AuthActionTypes.RegisterError:
      return produce<AuthState>(state, (newState) => {
        newState.loading = false;
      });
    case AuthActionTypes.Logout:
      return produce<AuthState>(state, (newState) => {
        newState.loading = true;
      });
    case AuthActionTypes.LogoutSuccess:
      return produce<AuthState>(state, (newState) => {
        newState.loading = false;
        newState.userToken = null;
      });
    case AuthActionTypes.LogoutError:
      return produce<AuthState>(state, (newState) => {
        newState.loading = false;
      });
    default:
      return state;
  }
}
