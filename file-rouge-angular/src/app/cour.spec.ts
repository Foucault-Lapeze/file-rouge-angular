import { TestBed } from '@angular/core/testing';

import { Cour } from './cour';

describe('Cour', () => {
  let service: Cour;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Cour);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
