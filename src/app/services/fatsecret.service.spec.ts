import { TestBed } from '@angular/core/testing';

import { FatsecretService } from './fatsecret.service';

describe('FatsecretService', () => {
  let service: FatsecretService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FatsecretService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
