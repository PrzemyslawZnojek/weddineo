import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MockModule, MockPipe } from 'ng-mocks';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { HeaderComponent } from './header.component';
import { TranslatePipe } from '@ngx-translate/core';
import { of } from 'rxjs';
import { AuthFacade } from '@weddineo-frontend/auth';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FlexLayoutModule,
        MockModule(MatToolbarModule),
        MockModule(MatIconModule),
      ],
      declarations: [HeaderComponent, MockPipe(TranslatePipe)],
      providers: [{
        provide: AuthFacade,
        useClass: class {
          username$ = of({
            email: 'test@mail.com'
          })
        }
      }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
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

  it('should render username and icon', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.getElementsByClassName('username').length).toEqual(1);
    expect(compiled.getElementsByClassName('material-icons').length).toEqual(1);
  });
});
