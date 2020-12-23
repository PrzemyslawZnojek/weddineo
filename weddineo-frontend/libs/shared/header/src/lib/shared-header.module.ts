import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { TranslateModule } from '@ngx-translate/core';
import { AuthModule } from '@weddineo-frontend/auth';
import { HeaderComponent } from './header/header.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatToolbarModule,
    TranslateModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    AuthModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class SharedHeaderModule {}
