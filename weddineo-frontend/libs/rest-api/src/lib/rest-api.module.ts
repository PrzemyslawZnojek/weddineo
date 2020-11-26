import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService, VersionService } from './api/api';

@NgModule({
  imports: [HttpClientModule, AngularFireAuthModule],
  providers: [VersionService, AuthService],
})
export class RestApiModule {}
