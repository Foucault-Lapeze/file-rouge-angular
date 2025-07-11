import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourDetail } from './cour-detail';

describe('CourDetail', () => {
  let component: CourDetail;
  let fixture: ComponentFixture<CourDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
