import { Component, Input } from '@angular/core';
import { Version } from '@weddineo-frontend/rest-api';

@Component({
  selector: 'weddineo-frontend-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  @Input() version: Version;
}
