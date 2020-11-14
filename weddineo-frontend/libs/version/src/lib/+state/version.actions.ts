import { Action } from '@ngrx/store';
import { Version } from '@weddineo-frontend/rest-api';

export enum VersionActionTypes {
  LoadVersion = '[Version] Load Version',
  LoadVersionSuccess = '[Version] Load Version Success',
  LoadVersionError = '[Version] Load Version Error',
}

export class LoadVersion implements Action {
  readonly type = VersionActionTypes.LoadVersion;
}

export class LoadVersionSuccess implements Action {
  readonly type = VersionActionTypes.LoadVersionSuccess;
  constructor(public payload: Version) {}
}

export class LoadVersionError implements Action {
  readonly type = VersionActionTypes.LoadVersionError;
}

export type VersionActions =
  | LoadVersion
  | LoadVersionSuccess
  | LoadVersionError;

export const fromVersionActions = {
  LoadVersion,
  LoadVersionSuccess,
  LoadVersionError,
};
