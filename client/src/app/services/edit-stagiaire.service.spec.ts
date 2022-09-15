import { TestBed } from '@angular/core/testing';

import { EditStagiaireService } from './edit-stagiaire.service';

describe('EditStagiaireService', () => {
  let service: EditStagiaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditStagiaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
