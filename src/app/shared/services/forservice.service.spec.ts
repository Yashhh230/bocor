import { TestBed } from '@angular/core/testing';

import { ForserviceService } from './forservice.service';

describe('ForserviceService', () => {
  let service: ForserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
