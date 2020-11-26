import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { LoginCommand } from '@weddineo-frontend/rest-api';
import { Login } from './auth.actions';
import { AuthPartialState } from './auth.reducer';
import { authQuerry } from './auth.selectors';

@Injectable()
export class AuthFacade {
  isLoading$ = this.store.pipe(select(authQuerry.getLoading));
  getUser$ = this.store.pipe(select(authQuerry.getUser));

  constructor(private store: Store<AuthPartialState>) {}

  login(command: LoginCommand) {
    this.store.dispatch(new Login(command));
  }
}
