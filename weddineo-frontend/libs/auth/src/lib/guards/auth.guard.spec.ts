import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';

describe.skip('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthGuard);
  });

  it.skip('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
