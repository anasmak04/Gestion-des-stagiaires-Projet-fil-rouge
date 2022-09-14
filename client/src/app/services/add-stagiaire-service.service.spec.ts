import { TestBed } from '@angular/core/testing';

import { AddStagiaireServiceService } from './add-stagiaire-service.service';

describe('AddStagiaireServiceService', () => {
  let service: AddStagiaireServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddStagiaireServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
