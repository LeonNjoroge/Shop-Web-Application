import { TestBed } from '@angular/core/testing';

import { SanitizeImageService } from './sanitize-image.service';

describe('SanitizeImageService', () => {
  let service: SanitizeImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SanitizeImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
