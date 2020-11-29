import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { isNil } from 'lodash';
import { ErrorMessage } from '../../model/error-message';

@Component({
  selector: 'weddineo-frontend-text-input',
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

  getError() {
    if (!isNil(this.errors)) {
      return this.errors.find((err) => this.fc.hasError(err.error))?.message;
    }
  }
}
