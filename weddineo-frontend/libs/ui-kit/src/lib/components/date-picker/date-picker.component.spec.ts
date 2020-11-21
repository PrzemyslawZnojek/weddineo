import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MockComponents, MockModule } from 'ng-mocks';
import { DatePickerComponent } from './date-picker.component';

describe('DatePickerComponent', () => {
  let component: DatePickerComponent;
  let fixture: ComponentFixture<DatePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FlexLayoutModule,
        ReactiveFormsModule,
        MockModule(MatDatepickerModule),
      ],
      declarations: [
        DatePickerComponent,
        MockComponents(MatInput, MatFormField, MatLabel),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePickerComponent);
    component = fixture.componentInstance;
    component.fc = new FormControl({});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match snapshot', () => {
    fixture.detectChanges();
    expect(fixture).toMatchSnapshot();
  });

  it('should render valid label', () => {
    component.label = 'test';
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('mat-label').innerHTML).toContain('test');
  });
});
