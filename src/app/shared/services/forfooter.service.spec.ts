import { TestBed } from '@angular/core/testing';

import { ForfooterService } from './forfooter.service';

describe('ForfooterService', () => {
  let service: ForfooterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForfooterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
