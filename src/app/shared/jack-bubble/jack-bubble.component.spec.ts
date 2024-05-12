import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JackBubbleComponent } from './jack-bubble.component';

describe('JackBubbleComponent', () => {
  let component: JackBubbleComponent;
  let fixture: ComponentFixture<JackBubbleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JackBubbleComponent]
    });
    fixture = TestBed.createComponent(JackBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
