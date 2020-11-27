import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorMessage } from 'libs/ui-kit/src/lib/model/error-message';
import { switchMap } from 'rxjs/operators';
import { AuthFacade } from '../../+state/auth.facade';

@Component({
  selector: 'weddineo-frontend-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;

  firebaseUser$ = this.authFacade.getFirebaseUser$;

  constructor(private fb: FormBuilder, private authFacade: AuthFacade) {}

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
      message: 'Field is required',
    },
  ];

  login() {
    this.authFacade.login({
      login: this.formGroup.get('login').value,
      password: this.formGroup.get('password').value,
    });
  }

  logout() {
    this.authFacade.logout();
  }
}
