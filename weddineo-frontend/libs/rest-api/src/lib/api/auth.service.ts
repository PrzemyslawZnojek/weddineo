import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { from, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { LoginCommand } from '../model/login-command';
import { RegisterCommand } from '../model/register-command';

@Injectable()
export class AuthService {
  private apiBaseUrl = this.BASE_URL + 'auth/';

  firebaseUser$ = this.fireAuth.user;

  constructor(
    private http: HttpClient,
    private fireAuth: AngularFireAuth,
    private router: Router,
    @Inject('BASE_URL') private BASE_URL: string
  ) {}

  login(command: LoginCommand) {
    return this.loginToFirebase(command).pipe(
      switchMap((data) => from(<Promise<string>>data.user.getIdToken()))
    );
  }

  logout() {
    return from(this.fireAuth.signOut()).pipe(
      switchMap(() => this.http.post<void>(this.apiBaseUrl + 'logout', null))
    );
  }

  register(command: RegisterCommand): Observable<RegisterCommand> {
    return this.http.post<RegisterCommand>(
      this.apiBaseUrl + 'register',
      command
    );
  }

  private loginToFirebase(command: LoginCommand): Observable<any> {
    return from(
      this.fireAuth.signInWithEmailAndPassword(command.login, command.password)
    );
  }
}
