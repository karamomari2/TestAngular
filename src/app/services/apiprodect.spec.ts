import { TestBed } from '@angular/core/testing';

import { APIProdect } from './apiprodect';

describe('APIProdect', () => {
  let service: APIProdect;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIProdect);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
