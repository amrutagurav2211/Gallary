import { TestBed } from '@angular/core/testing';

import { GallarySerService } from './gallary-ser.service';

describe('GallarySerService', () => {
  let service: GallarySerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GallarySerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
