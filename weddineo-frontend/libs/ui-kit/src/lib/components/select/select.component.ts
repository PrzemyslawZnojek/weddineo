import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SelectOption } from '../../model/select-option';

@Component({
  selector: 'weddineo-frontend-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Input() width: string = '100%';
  @Input() fc: FormControl;
  @Input() options: SelectOption[];
  @Input() label: string;

}
