import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatToolbarModule,
    TranslateModule,
    MatIconModule,
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class SharedHeaderModule {}
