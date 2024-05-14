import { TestBed } from '@angular/core/testing';

import { JackService } from './jack.service';

describe('JackService', () => {
  let service: JackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
