import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detalies } from './detalies';

describe('Detalies', () => {
  let component: Detalies;
  let fixture: ComponentFixture<Detalies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Detalies]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Detalies);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
