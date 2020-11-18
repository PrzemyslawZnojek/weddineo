import { createFeatureSelector, createSelector } from '@ngrx/store';
import { versionFeatureKey, VersionState } from './version.reducer';

const getVersionState = createFeatureSelector<VersionState>(versionFeatureKey);

const getVersionLoading = createSelector(
  getVersionState,
  (state: VersionState) => state.loading
);

const getVersion = createSelector(
  getVersionState,
  (state: VersionState) => state.version
);

export const versionQuerry = {
  getVersionLoading,
  getVersion,
};
