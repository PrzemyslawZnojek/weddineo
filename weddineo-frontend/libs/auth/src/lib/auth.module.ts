import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { AuthRoutingModule } from './auth.routing.module';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { UiKitModule } from '@weddineo-frontend/ui-kit';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './+state/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './+state/auth.effects';
import { AuthFacade } from './+state/auth.facade';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    TranslateModule,
    AuthRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    UiKitModule,
    StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.reducer),
    EffectsModule.forFeature([AuthEffects]),
    AngularFireAuthModule,
  ],
  declarations: [LoginComponent],
  providers: [AuthFacade],
})
export class AuthModule {}
