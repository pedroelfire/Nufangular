import { TestBed } from '@angular/core/testing';

import { BackendUrlsService } from './backend-urls.service';

describe('BackendUrlsService', () => {
  let service: BackendUrlsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendUrlsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
