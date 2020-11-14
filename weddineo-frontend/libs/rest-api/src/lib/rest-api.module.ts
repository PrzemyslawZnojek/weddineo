import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { VersionService } from './api/api';

@NgModule({
  imports: [HttpClientModule],
  providers: [VersionService],
})
export class RestApiModule {}
