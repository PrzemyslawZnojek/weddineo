import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponents } from 'ng-mocks';
import { LoginComponent } from './login.component';
import {
  ActionButtonComponent,
  TextInputComponent,
} from '@weddineo-frontend/ui-kit';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatCardModule, FlexLayoutModule, ReactiveFormsModule],
      declarations: [
        LoginComponent,
        MockComponents(ActionButtonComponent, TextInputComponent),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
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
    expect(compiled.querySelectorAll('weddineo-frontend-text-input').length).toEqual(2);
    expect(compiled.querySelectorAll('weddineo-frontend-action-button').length).toEqual(
      1
    );
  });
});
