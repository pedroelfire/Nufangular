import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealItineraryComponent } from './meal-itinerary.component';

describe('MealItineraryComponent', () => {
  let component: MealItineraryComponent;
  let fixture: ComponentFixture<MealItineraryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MealItineraryComponent]
    });
    fixture = TestBed.createComponent(MealItineraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
