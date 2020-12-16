import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthFacade } from '@weddineo-frontend/auth';

@Component({
  selector: 'weddineo-frontend-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  username$ = this.authFacade.getFirebaseUser$;

  constructor(private authFacade: AuthFacade, private router: Router) {}

  logout() {
    this.authFacade.logout();
  }

  login() {
    this.router.navigateByUrl('auth');
  }

  goToHomepage(){
    this.router.navigateByUrl('home');
  }
}
