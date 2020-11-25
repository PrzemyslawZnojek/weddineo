import { Action } from '@ngrx/store';
import { LoginCommand, Version } from '@weddineo-frontend/rest-api';

export enum AuthActionTypes {
  Login = '[Auth] Login',
  LoginSuccess = '[Auth] Login Success',
  LoginError = '[Auth] Login Error',
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;
  constructor(public payload: LoginCommand) {}

}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;
  constructor(public payload: any) {}

}

export class LoginError implements Action {
  readonly type = AuthActionTypes.LoginError;
}

export type AuthActions =
  | Login
  | LoginSuccess
  | LoginError;

export const fromAuthActions = {
  Login,
  LoginSuccess,
  LoginError,
};
