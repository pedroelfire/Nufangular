import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JackMessageComponent } from './jack-message.component';

describe('JackMessageComponent', () => {
  let component: JackMessageComponent;
  let fixture: ComponentFixture<JackMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JackMessageComponent]
    });
    fixture = TestBed.createComponent(JackMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
