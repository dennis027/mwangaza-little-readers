import { TestBed } from '@angular/core/testing';

import { VolunteerInfoService } from './volunteer-info.service';

describe('VolunteerInfoService', () => {
  let service: VolunteerInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VolunteerInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
