import { Action } from '@ngrx/store';
import { LoginCommand } from '@weddineo-frontend/rest-api';

export enum AuthActionTypes {
  Login = '[Auth] Login',
  LoginSuccess = '[Auth] Login Success',
  LoginError = '[Auth] Login Error',

  Logout = '[Auth] Logout',
  LogoutSuccess = '[Auth] Logout Success',
  LogoutError = '[Auth] Logout Error',
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;
  constructor(public payload: LoginCommand) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;
  constructor(public payload: string) {}
}

export class LoginError implements Action {
  readonly type = AuthActionTypes.LoginError;
}

export class Logout implements Action {
  readonly type = AuthActionTypes.Logout;
}

export class LogoutSuccess implements Action {
  readonly type = AuthActionTypes.LogoutSuccess;
}

export class LogoutError implements Action {
  readonly type = AuthActionTypes.LogoutError;
}

export type AuthActions =
  | Login
  | LoginSuccess
  | LoginError
  | Logout
  | LogoutSuccess
  | LogoutError;

export const fromAuthActions = {
  Login,
  LoginSuccess,
  LoginError,
  Logout,
  LogoutSuccess,
  LogoutError,
};
