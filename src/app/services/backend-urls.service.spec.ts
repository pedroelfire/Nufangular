import { TestBed } from '@angular/core/testing';

import { BackendURLsService } from './backend-urls.service';

describe('BackendURLsService', () => {
  let service: BackendURLsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendURLsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
