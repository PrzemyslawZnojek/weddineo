import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { emailValidator } from '@weddineo-frontend/ui-kit';
import { ErrorMessage } from 'libs/ui-kit/src/lib/model/error-message';

@Component({
  selector: 'weddineo-frontend-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  private readonly MIN_LENGTH: number = 8;
  formGroup: FormGroup;

  readonly errors: ErrorMessage[] = [
    {
      error: 'required',
      message: this.translateService.instant('common.validator.required'),
    },
    {
      error: 'minLength',
      message: this.translateService.instant('common.validator.minLength'),
    },
    {
      error: 'email',
      message: this.translateService.instant('common.validator.email'),
    },
    {
      error: 'password',
      message: this.translateService.instant('common.validator.password'),
    },
  ];

  constructor(
    private translateService: TranslateService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      username: [
        null,
        [Validators.required, Validators.minLength(this.MIN_LENGTH)],
      ],
      email: [
        null,
        [
          Validators.required,
          Validators.minLength(this.MIN_LENGTH),
          emailValidator,
        ],
      ],
      password: [
        null,
        [Validators.required, Validators.minLength(this.MIN_LENGTH)],
      ],
      passwordConfirm: [
        null,
        [Validators.required, Validators.minLength(this.MIN_LENGTH)],
      ],
    });
  }

  register() {}

  goToLogin() {}
}
