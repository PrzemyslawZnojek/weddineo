import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { VersionService } from '@weddineo-frontend/rest-api';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import {
  fromVersionActions,
  LoadVersion,
  VersionActionTypes,
} from './version.actions';

@Injectable()
export class VersionEffects {
  @Effect() loadVersion$ = this.actions$.pipe(
    ofType<LoadVersion>(VersionActionTypes.LoadVersion),
    switchMap((action) =>
      this.versionService.getVersion().pipe(
        map((res) => new fromVersionActions.LoadVersionSuccess(res)),
        catchError(() => of(new fromVersionActions.LoadVersionError()))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private versionService: VersionService
  ) {}
}
