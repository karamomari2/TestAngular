import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prodect } from './prodect';

describe('Prodect', () => {
  let component: Prodect;
  let fixture: ComponentFixture<Prodect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Prodect]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Prodect);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
