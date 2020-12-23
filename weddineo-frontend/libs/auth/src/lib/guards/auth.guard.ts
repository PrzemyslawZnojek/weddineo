import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMapTo, tap } from 'rxjs/operators';
import { AuthFacade } from '../+state/auth.facade';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authFacade: AuthFacade, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.authFacade.getUserToken$.pipe(
      tap((authenticated) => {
        if (!state.url.includes('auth')) {
          if (!authenticated) {
            //this.authFacade.logout();
            this.router.navigateByUrl('/home');
          } else {
            this.router.navigateByUrl('');
          }
        }
      }),
      map((token) => !!token || state.url.includes('auth'))
    );
  }
}
