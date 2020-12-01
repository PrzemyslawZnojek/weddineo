import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {
  AuthService,
  LoginCommand,
  RegisterCommand,
} from '@weddineo-frontend/rest-api';
import { Login, Logout, Register } from './auth.actions';
import { AuthPartialState } from './auth.reducer';
import { authQuerry } from './auth.selectors';

@Injectable()
export class AuthFacade {
  isLoading$ = this.store.pipe(select(authQuerry.getLoading));
  getUserToken$ = this.store.pipe(select(authQuerry.getUserToken));
  getFirebaseUser$ = this.authService.firebaseUser$;

  constructor(
    private store: Store<AuthPartialState>,
    private authService: AuthService
  ) {}

  login(command: LoginCommand) {
    this.store.dispatch(new Login(command));
  }

  logout() {
    this.store.dispatch(new Logout());
  }

  register(command: RegisterCommand) {
    this.store.dispatch(new Register(command));
  }
}
