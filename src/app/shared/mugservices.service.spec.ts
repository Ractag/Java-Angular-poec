import { TestBed } from '@angular/core/testing';

import { MugservicesService } from './mugservices.service';

describe('MugservicesService', () => {
  let service: MugservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MugservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
