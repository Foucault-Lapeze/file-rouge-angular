import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourForm } from './cour-form';

describe('CourForm', () => {
  let component: CourForm;
  let fixture: ComponentFixture<CourForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
