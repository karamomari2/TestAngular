import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProdect } from './add-prodect';

describe('AddProdect', () => {
  let component: AddProdect;
  let fixture: ComponentFixture<AddProdect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddProdect]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProdect);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
