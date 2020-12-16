import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MockComponents, MockModule, MockPipe } from 'ng-mocks';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { TranslatePipe } from '@ngx-translate/core';
import { of } from 'rxjs';
import { AuthFacade } from '@weddineo-frontend/auth';
import { MatButtonModule } from '@angular/material/button';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home.component';
import { ActionButtonComponent } from '@weddineo-frontend/shared/ui-kit';
import { MatCardModule } from '@angular/material/card';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FlexLayoutModule,
        RouterTestingModule,
        MockModule(MatCardModule),
      ],
      declarations: [ HomeComponent, MockPipe(TranslatePipe), MockComponents(ActionButtonComponent) ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match snapshot', () => {
    fixture.detectChanges();
    expect(fixture).toMatchSnapshot();
  });
});
