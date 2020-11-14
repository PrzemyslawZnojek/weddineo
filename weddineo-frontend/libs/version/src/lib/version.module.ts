import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromVersion from './+state/version.reducer';
import { VersionEffects } from './+state/version.effects';
import { VersionFacade } from './+state/version.facade';
import { RestApiModule } from '@weddineo-frontend/rest-api';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromVersion.versionFeatureKey, fromVersion.reducer),
    EffectsModule.forFeature([VersionEffects]),
    RestApiModule,
  ],
  providers: [VersionFacade],
})
export class VersionModule {}
