import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'weddineo-frontend-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private router: Router) {}

  login() {
    this.router.navigateByUrl('auth');
  }

  register() {
    this.router.navigateByUrl('auth/register');
  }
}
