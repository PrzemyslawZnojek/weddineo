import { Version } from '../model/model';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { variables } from '../variables';
import { Injectable } from '@angular/core';

@Injectable()
export class VersionService {
  private apiBaseUrl = variables.API_URL;

  constructor(private http: HttpClient) {}

  public getVersion(): Observable<Version> {
    return of({
      version: '123',
      revision: '321',
    });
  }
}
