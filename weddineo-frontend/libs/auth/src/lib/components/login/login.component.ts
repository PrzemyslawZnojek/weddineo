import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ErrorMessage } from '@weddineo-frontend/shared/ui-kit';
import { AuthFacade } from '../../+state/auth.facade';

@Component({
  selector: 'weddineo-frontend-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;

  firebaseUser$ = this.authFacade.getFirebaseUser$;

  constructor(
    private fb: FormBuilder,
    private authFacade: AuthFacade,
    private translateService: TranslateService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.formGroup = this.fb.group({
      login: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  errors: ErrorMessage[] = [
    {
      error: 'required',
      message: this.translateService.instant('common.validator.required'),
    },
  ];

  login() {
    this.authFacade.login({
      login: this.formGroup.get('login').value,
      password: this.formGroup.get('password').value,
    });
  }

  goToRegister() {
    this.router.navigate(['register'], { relativeTo: this.route });
  }
}
