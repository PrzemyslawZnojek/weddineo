import { TestBed } from '@angular/core/testing';
import { VersionFacade } from '@weddineo-frontend/version';
import { MockComponent, MockPipe } from 'ng-mocks';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslatePipe } from '@ngx-translate/core';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, FlexLayoutModule],
      declarations: [
        AppComponent,
        MockComponent(FooterComponent),
        MockPipe(TranslatePipe),
      ],
      providers: [
        {
          provide: VersionFacade,
          useClass: class {
            loadVersion() {}
            getVersion$ = of();
          },
        },
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
