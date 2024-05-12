import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JackCardComponent } from './jack-card.component';

describe('JackCardComponent', () => {
  let component: JackCardComponent;
  let fixture: ComponentFixture<JackCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JackCardComponent]
    });
    fixture = TestBed.createComponent(JackCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
