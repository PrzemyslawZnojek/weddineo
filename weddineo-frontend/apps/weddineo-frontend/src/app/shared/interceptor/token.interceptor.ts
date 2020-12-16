import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthFacade } from '@weddineo-frontend/auth';
import { environment } from 'apps/weddineo-frontend/src/environments/environment';
import { Observable } from 'rxjs';
import { mergeMap, switchMap } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authFacade: AuthFacade) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.includes(environment.baseUrl)) {
      const token$ = this.authFacade.getUserToken$;

      return token$.pipe(
        switchMap((token: string) => {
          if (token) {
            req = req.clone({
              setHeaders: {
                Authorization: `Bearer ${token}`,
              },
            });
          }
          return next.handle(req);
        })
      );
    } else {
      return next.handle(req);
    }
  }
}
