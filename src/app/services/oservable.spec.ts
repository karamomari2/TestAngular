import { TestBed } from '@angular/core/testing';

import { Oservable } from './oservable';

describe('Oservable', () => {
  let service: Oservable;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Oservable);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
