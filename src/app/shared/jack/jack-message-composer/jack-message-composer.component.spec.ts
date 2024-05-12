import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JackMessageComposerComponent } from './jack-message-composer.component';

describe('JackMessageComposerComponent', () => {
  let component: JackMessageComposerComponent;
  let fixture: ComponentFixture<JackMessageComposerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JackMessageComposerComponent]
    });
    fixture = TestBed.createComponent(JackMessageComposerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
