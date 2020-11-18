import { Version } from '@weddineo-frontend/rest-api';
import { VersionActions, VersionActionTypes } from './version.actions';
import produce from 'immer';

export const versionFeatureKey = 'version';

export interface VersionState {
  loading: boolean;
  version: Version;
}

export const initialState: VersionState = {
  loading: false,
  version: null,
};

export interface VersionPartialState {
  readonly [versionFeatureKey]: VersionState;
}

export function reducer(
  state: VersionState = initialState,
  action: VersionActions
): VersionState {
  switch (action.type) {
    case VersionActionTypes.LoadVersion:
      return produce<VersionState>(state, (newState) => {
        newState.loading = true;
      });
    case VersionActionTypes.LoadVersionSuccess:
      return produce<VersionState>(state, (newState) => {
        newState.loading = false;
        newState.version = action.payload;
      });
    case VersionActionTypes.LoadVersionError:
      return produce<VersionState>(state, (newState) => {
        newState.loading = false;
      });
    default:
      return state;
  }
}
