import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietsSummaryComponent } from './diets-summary.component';

describe('DietsSummaryComponent', () => {
  let component: DietsSummaryComponent;
  let fixture: ComponentFixture<DietsSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DietsSummaryComponent]
    });
    fixture = TestBed.createComponent(DietsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
