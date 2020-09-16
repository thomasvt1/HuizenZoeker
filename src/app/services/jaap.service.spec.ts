import { TestBed } from '@angular/core/testing';

import { JaapService } from './jaap.service';

describe('JaapService', () => {
  let service: JaapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JaapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
