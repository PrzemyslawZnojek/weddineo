import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VersionFacade } from '@weddineo-frontend/version';

@Component({
  selector: 'weddi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  version$ = this.versionFacade.getVersion$;

  constructor(private versionFacade: VersionFacade) {
    this.versionFacade.loadVersion();
  }
}
