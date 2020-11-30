import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Version } from '../model/model';

@Injectable()
export class VersionService {
  private apiBaseUrl = this.BASE_URL;

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private BASE_URL: string
  ) {}

  public getVersion(): Observable<Version> {
    return this.http.get<Version>(this.apiBaseUrl + 'ver');
  }
}
