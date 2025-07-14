import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Notfaund } from './notfaund';

describe('Notfaund', () => {
  let component: Notfaund;
  let fixture: ComponentFixture<Notfaund>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Notfaund]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Notfaund);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
