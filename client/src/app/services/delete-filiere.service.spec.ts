import { TestBed } from '@angular/core/testing';

import { DeleteFiliereService } from './delete-filiere.service';

describe('DeleteFiliereService', () => {
  let service: DeleteFiliereService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteFiliereService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
