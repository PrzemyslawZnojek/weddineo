import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { VersionModule } from '@weddineo-frontend/version';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ErrorInterceptor } from './shared/interceptor/error.interceptor';
import { TokenInterceptor } from './shared/interceptor/token.interceptor';
<<<<<<< HEAD
import { CommonModule } from '@angular/common';
import { UiKitModule } from '@weddineo-frontend/ui-kit';
=======
>>>>>>> 124e6a5... add error and auth-token interceptors

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    UiKitModule,
    BrowserModule,
    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    VersionModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
