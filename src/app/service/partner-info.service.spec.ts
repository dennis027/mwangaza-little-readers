import { TestBed } from '@angular/core/testing';

import { PartnerInfoService } from './partner-info.service';

describe('PartnerInfoService', () => {
  let service: PartnerInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartnerInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
