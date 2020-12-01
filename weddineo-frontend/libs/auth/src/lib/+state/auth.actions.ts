import { Action } from '@ngrx/store';
import { LoginCommand, RegisterCommand } from '@weddineo-frontend/rest-api';

export enum AuthActionTypes {
  Login = '[Auth] Login',
  LoginSuccess = '[Auth] Login Success',
  LoginError = '[Auth] Login Error',

  Logout = '[Auth] Logout',
  LogoutSuccess = '[Auth] Logout Success',
  LogoutError = '[Auth] Logout Error',

  Register = '[Auth] Register',
  RegisterSuccess = '[Auth] Register Success',
  RegisterError = '[Auth] Register Error',
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

export class Register implements Action {
  readonly type = AuthActionTypes.Register;
  constructor(public payload: RegisterCommand) {}
}

export class RegisterSuccess implements Action {
  readonly type = AuthActionTypes.RegisterSuccess;
  constructor(public payload: RegisterCommand) {}
}

export class RegisterError implements Action {
  readonly type = AuthActionTypes.RegisterError;
}

export type AuthActions =
  | Login
  | LoginSuccess
  | LoginError
  | Logout
  | LogoutSuccess
  | LogoutError
  | Register
  | RegisterSuccess
  | RegisterError;

export const fromAuthActions = {
  Login,
  LoginSuccess,
  LoginError,
  Logout,
  LogoutSuccess,
  LogoutError,
  Register,
  RegisterSuccess,
  RegisterError,
};
