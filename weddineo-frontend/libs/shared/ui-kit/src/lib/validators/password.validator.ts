import { AbstractControl, ValidatorFn } from '@angular/forms';

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const valid = control.value.toString().includes("A");
    return !valid ? {weakPassword: valid} : null;
  };
}
