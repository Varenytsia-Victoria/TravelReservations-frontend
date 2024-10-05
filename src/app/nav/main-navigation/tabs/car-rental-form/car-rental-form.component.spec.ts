import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRentalFormComponent } from './car-rental-form.component';

describe('CarRentalFormComponent', () => {
  let component: CarRentalFormComponent;
  let fixture: ComponentFixture<CarRentalFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarRentalFormComponent]
    });
    fixture = TestBed.createComponent(CarRentalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
