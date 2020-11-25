import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'weddineo-frontend-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent {
  @Input() width: string = '100%';
  @Input() label: string;
  @Input() color: null | 'primary' | 'accent' | 'warn' = 'primary';
  @Input() buttonStyle: 'basic' | 'raised' | 'stroked' | 'flat' = 'raised'
  @Input() disabled: boolean = false;

  @Output() onClick = new EventEmitter();
}
