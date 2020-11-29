import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import {
  ActionButtonComponent,
  TextInputComponent,
} from '@weddineo-frontend/ui-kit';
import { MockComponents, MockPipe } from 'ng-mocks';
import { AuthFacade } from '../../+state/auth.facade';
import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        RouterTestingModule,
      ],
      declarations: [
        RegisterComponent,
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
            register() {}
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
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

  it('should render elements', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(
      compiled.querySelectorAll('weddineo-frontend-text-input').length
    ).toEqual(4);
    expect(
      compiled.querySelectorAll('weddineo-frontend-action-button').length
    ).toEqual(2);
  });
});
