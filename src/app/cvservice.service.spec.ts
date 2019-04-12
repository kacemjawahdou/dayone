import { TestBed } from '@angular/core/testing';

import { CvserviceService } from './cvservice.service';

describe('CvserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CvserviceService = TestBed.get(CvserviceService);
    expect(service).toBeTruthy();
  });
});
