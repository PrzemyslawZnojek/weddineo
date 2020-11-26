import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { from, Observable } from 'rxjs';
import { LoginCommand } from '../model/login-command';
import { RegisterCommand } from '../model/register-command';
import { variables } from '../variables';

@Injectable()
export class AuthService {
  private apiBaseUrl = variables.API_URL + 'auth/';

  constructor(private http: HttpClient, private fireAuth: AngularFireAuth) {}

  login(command: LoginCommand): Observable<LoginCommand> {
    return from(
      this.fireAuth
        .signInWithEmailAndPassword(command.login, command.password)
        .then((data) => {
          return data.user.getIdToken().then((token) => {
            localStorage.setItem('ID_TOKEN', token);
            return this.http.post<LoginCommand>(
              this.apiBaseUrl + 'login',
              command
            );
          });
        })
    );
  }

  register(command: RegisterCommand) {
    return this.http.post(this.apiBaseUrl + 'register', command);
  }
}
