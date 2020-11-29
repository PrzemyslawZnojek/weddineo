import { LOCATION_INITIALIZED, registerLocaleData } from '@angular/common';
import { Injector } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'apps/weddineo-frontend/src/environments/environment';
import * as moment from 'moment';
import localePl from "@angular/common/locales/pl";

export const appInitializerFactory = (
  translate: TranslateService,
  injector: Injector
) => {
  return () =>
    new Promise<any>((resolve: any) => {
      const locationInitialized = injector.get(
        LOCATION_INITIALIZED,
        Promise.resolve(null)
      );
      locationInitialized.then(() => {
        moment.locale(environment.defaultLang.split("_")[1]);
        // TODO dynamic locale import
        registerLocaleData(localePl);
        translate.setDefaultLang(environment.defaultLang);
        translate.use(environment.defaultLang).subscribe(
          () => {},
          err => {
            console.error(
              `Problem with '${environment.defaultLang}' language initialization.'`
            );
          },
          () => {
            resolve(null);
          }
        );
      });
    });
};
