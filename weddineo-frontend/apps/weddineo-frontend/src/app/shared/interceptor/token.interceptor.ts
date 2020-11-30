import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'apps/weddineo-frontend/src/environments/environment';
import { AuthFacade } from 'libs/auth/src/lib/+state/auth.facade';
import { Observable } from 'rxjs';
import { mergeMap, switchMap } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authFacade: AuthFacade) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token$ = this.authFacade.getUserToken$;

    return token$.pipe(
      switchMap((token: string) => {
        if (token && req.url.includes(environment.baseUrl)) {
          req = req.clone({
            setHeaders: {
              Authorization: `Bearer ${token}`,
            },
          });
        }
        return next.handle(req);
      })
    );
  }
}
