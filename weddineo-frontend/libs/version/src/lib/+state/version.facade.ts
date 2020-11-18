import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { LoadVersion } from './version.actions';
import { VersionPartialState } from './version.reducer';
import { versionQuerry } from './version.selectors';

@Injectable()
export class VersionFacade {
  isLoading$ = this.store.pipe(select(versionQuerry.getVersionLoading));
  getVersion$ = this.store.pipe(select(versionQuerry.getVersion));

  constructor(private store: Store<VersionPartialState>) {}

  loadVersion() {
    this.store.dispatch(new LoadVersion());
  }
}
