import { TestBed } from '@angular/core/testing';

import { AddfiliereService } from './addfiliere.service';

describe('AddfiliereService', () => {
  let service: AddfiliereService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddfiliereService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
