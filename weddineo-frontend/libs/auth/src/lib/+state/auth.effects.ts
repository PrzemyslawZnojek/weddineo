import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthService } from '@weddineo-frontend/rest-api';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import {
  AuthActionTypes,
  Login,
  fromAuthActions,
  Register,
  LogoutSuccess,
  Logout,
  LogoutError,
} from './auth.actions';

@Injectable()
export class AuthEffects {
  @Effect() login$ = this.actions$.pipe(
    ofType<Login>(AuthActionTypes.Login),
    switchMap((action) =>
      this.authService.login(action.payload).pipe(
        map((res) => new fromAuthActions.LoginSuccess(res)),
        catchError(() => of(new fromAuthActions.LoginError()))
      )
    )
  );

  @Effect() logout$ = this.actions$.pipe(
    ofType<Logout>(AuthActionTypes.Logout),
    switchMap((action) =>
      this.authService.logout().pipe(
        map((res) => new fromAuthActions.LogoutSuccess()),
        catchError(() => of(new fromAuthActions.LogoutError()))
      )
    )
  );

  @Effect({ dispatch: false }) logoutSuccess$ = this.actions$.pipe(
    ofType<LogoutSuccess>(AuthActionTypes.LogoutSuccess),
    tap(() => this.router.navigateByUrl('home'))
  );

  @Effect({ dispatch: false }) logoutError$ = this.actions$.pipe(
    ofType<LogoutError>(AuthActionTypes.LogoutError),
    tap(() => this.router.navigateByUrl('home'))
  );

  @Effect() register$ = this.actions$.pipe(
    ofType<Register>(AuthActionTypes.Register),
    switchMap((action) =>
      this.authService.register(action.payload).pipe(
        map((res) => new fromAuthActions.RegisterSuccess(res)),
        catchError(() => of(new fromAuthActions.RegisterError()))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}
