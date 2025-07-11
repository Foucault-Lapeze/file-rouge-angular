import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCour } from './add-cour';

describe('AddCour', () => {
  let component: AddCour;
  let fixture: ComponentFixture<AddCour>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCour]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCour);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
