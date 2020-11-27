import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, Injector, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { VersionModule } from '@weddineo-frontend/version';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ErrorInterceptor } from './shared/interceptor/error.interceptor';
import { TokenInterceptor } from './shared/interceptor/token.interceptor';
import { CommonModule } from '@angular/common';
import { UiKitModule } from '@weddineo-frontend/ui-kit';
import { environment } from '../environments/environment';
import { AuthModule } from '@weddineo-frontend/auth';
import { AppRoutingModule } from './app.routing.module';
import { AngularFireModule } from '@angular/fire';
<<<<<<< HEAD
import { FooterComponent } from './shared/components/footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './shared/components/header/header.component';
=======
import { appInitializerFactory } from './shared/initializer/app-initializer';
>>>>>>> 11513a8... - login improvement - routing for auth module - autorization guard - improved baseUrl providing

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent],
  imports: [
    CommonModule,
    UiKitModule,
    BrowserModule,
    AuthModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatToolbarModule,
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
    TranslateModule.forRoot({
      defaultLanguage: 'pl_PL',
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    VersionModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: 'BASE_URL', useValue: environment.baseUrl, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
