import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponents, MockPipe } from 'ng-mocks';
import { LoginComponent } from './login.component';
import {
  ActionButtonComponent,
  TextInputComponent,
} from '@weddineo-frontend/shared/ui-kit';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { AuthFacade } from '../../+state/auth.facade';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        RouterTestingModule,
      ],
      declarations: [
        LoginComponent,
        MockComponents(ActionButtonComponent, TextInputComponent),
        MockPipe(TranslatePipe),
      ],
      providers: [
        {
          provide: TranslateService,
          useClass: class {
            instant() {}
          },
        },
        {
          provide: AuthFacade,
          useClass: class {
            login() {}
            getFirebaseUser$ = of();
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    component.formGroup = new FormGroup({
      login: new FormControl(),
      password: new FormControl(),
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match snapshot', () => {
    fixture.detectChanges();
    expect(fixture).toMatchSnapshot();
  });

  it('should render elements', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(
      compiled.querySelectorAll('weddineo-frontend-text-input').length
    ).toEqual(2);
    expect(
      compiled.querySelectorAll('weddineo-frontend-action-button').length
    ).toEqual(2);
  });
});
