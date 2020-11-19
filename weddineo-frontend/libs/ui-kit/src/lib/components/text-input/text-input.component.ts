import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ErrorMessage } from '../../model/error-message';

@Component({
  selector: 'weddi-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent {
  @Input() width: string = '100%';
  @Input() fc: FormControl;
  @Input() label: string;
  @Input() type: 'text' | 'password' = 'text';
  @Input() enableClear: boolean = false;
  @Input() errors: ErrorMessage[];
}
