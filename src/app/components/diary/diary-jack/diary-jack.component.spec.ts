import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryJackComponent } from './diary-jack.component';

describe('DiaryJackComponent', () => {
  let component: DiaryJackComponent;
  let fixture: ComponentFixture<DiaryJackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiaryJackComponent]
    });
    fixture = TestBed.createComponent(DiaryJackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
