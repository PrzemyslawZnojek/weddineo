import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MockModule, MockPipe } from 'ng-mocks';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslatePipe } from '@ngx-translate/core';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlexLayoutModule, MockModule(MatToolbarModule)],
      declarations: [FooterComponent, MockPipe(TranslatePipe)],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
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

  it('should render version and revision', () => {
    component.version = {
      version: '1.12',
      revision: '123abc',
    };
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('p').length).toEqual(2);
    expect(compiled.querySelectorAll('p')[0].innerHTML).toContain(`1.12`);
    expect(compiled.querySelectorAll('p')[1].innerHTML).toContain(`123abc`);
  });
});
