import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietSlidesComponent } from './diet-slides.component';

describe('DietSlidesComponent', () => {
  let component: DietSlidesComponent;
  let fixture: ComponentFixture<DietSlidesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DietSlidesComponent]
    });
    fixture = TestBed.createComponent(DietSlidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
