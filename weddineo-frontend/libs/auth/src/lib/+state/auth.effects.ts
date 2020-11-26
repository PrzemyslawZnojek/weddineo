import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthService, VersionService } from '@weddineo-frontend/rest-api';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AuthActionTypes, Login, fromAuthActions } from './auth.actions';

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

  constructor(private actions$: Actions, private authService: AuthService) {}
}
