import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [CommonModule, FlexLayoutModule, MatToolbarModule, TranslateModule],
  declarations: [FooterComponent],
  exports: [FooterComponent]
})
export class SharedFooterModule {}
