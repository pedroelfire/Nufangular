import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryMainComponent } from './diary-main.component';

describe('DiaryMainComponent', () => {
  let component: DiaryMainComponent;
  let fixture: ComponentFixture<DiaryMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiaryMainComponent]
    });
    fixture = TestBed.createComponent(DiaryMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
