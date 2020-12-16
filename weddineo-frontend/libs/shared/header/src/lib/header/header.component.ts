import { Component, OnInit } from '@angular/core';
import { AuthFacade } from '@weddineo-frontend/auth';

@Component({
  selector: 'weddineo-frontend-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  username$ = this.authFacade.getFirebaseUser$;

  constructor(private authFacade: AuthFacade) {}

  ngOnInit(): void {}
}
