import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionistDashboardComponent } from './nutritionist-dashboard.component';

describe('NutritionistDashboardComponent', () => {
  let component: NutritionistDashboardComponent;
  let fixture: ComponentFixture<NutritionistDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NutritionistDashboardComponent]
    });
    fixture = TestBed.createComponent(NutritionistDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
