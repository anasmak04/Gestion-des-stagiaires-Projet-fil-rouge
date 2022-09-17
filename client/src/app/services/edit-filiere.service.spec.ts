import { TestBed } from '@angular/core/testing';

import { EditFiliereService } from './edit-filiere.service';

describe('EditFiliereService', () => {
  let service: EditFiliereService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditFiliereService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
