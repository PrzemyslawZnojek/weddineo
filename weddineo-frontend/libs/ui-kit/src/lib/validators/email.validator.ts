import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';
import { isNil } from 'lodash';

const emailCSharpValidator = /^\w+([\.-]?\w+)*@((\[(\d{1,3}\.){3}\d{1,3}\])|(([0-9a-zA-Z][-0-9a-zA-Z]*[0-9a-zA-Z]*\.)+[a-zA-Z0-9][\-a-zA-Z0-9]{0,22}[a-zA-Z0-9]))$/;

export const emailValidator: ValidatorFn = (control: AbstractControl) => {
  const validateErrors = Validators.pattern(emailCSharpValidator)(control);

  if (isNil(validateErrors)) {
    return null;
  }

  return {
    email: true,
  };
};
