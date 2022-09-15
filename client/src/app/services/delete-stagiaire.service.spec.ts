import { TestBed } from '@angular/core/testing';

import { DeleteStagiaireService } from './delete-stagiaire.service';

describe('DeleteStagiaireService', () => {
  let service: DeleteStagiaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteStagiaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
