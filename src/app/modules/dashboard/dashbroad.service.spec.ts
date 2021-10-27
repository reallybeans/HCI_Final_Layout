import { TestBed } from '@angular/core/testing';

import { DashbroadService } from '../dashbroad.service';

describe('DashbroadService', () => {
  let service: DashbroadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashbroadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
