import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsFormComponent } from './trips-form.component';

describe('TripsFormComponent', () => {
  let component: TripsFormComponent;
  let fixture: ComponentFixture<TripsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TripsFormComponent]
    });
    fixture = TestBed.createComponent(TripsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
