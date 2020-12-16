import { FormGroup } from '@angular/forms';

export function matchFieldsValidator(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];
    if (control.value === matchingControl.value) {
      matchingControl.setErrors(null);
    } else {
      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }
      matchingControl.setErrors({ matchFields: true });
    }

    // set error on matchingControl if validation fails
  };
}
