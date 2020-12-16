import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import {
  emailValidator,
  ErrorMessage,
  matchFieldsValidator,
} from '@weddineo-frontend/shared/ui-kit';
import { AuthFacade } from '../../+state/auth.facade';

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
      error: 'minlength',
      message: this.translateService.instant('common.validator.minLength', {
        minLength: this.MIN_LENGTH,
      }),
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
    private authFacade: AuthFacade,
    private translateService: TranslateService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group(
      {
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
      },
      {
        validator: [matchFieldsValidator('password', 'passwordConfirm')],
      }
    );
  }

  register() {
    this.authFacade.register({
      username: this.formGroup.get('username').value,
      email: this.formGroup.get('email').value,
      password: this.formGroup.get('password').value,
    });
  }

  goToLogin() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
