import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home.routing.module';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedUiKitModule } from '@weddineo-frontend/shared/ui-kit';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, MatCardModule, FlexLayoutModule, SharedUiKitModule, TranslateModule],
  declarations: [HomeComponent],
})
export class HomeModule {}
