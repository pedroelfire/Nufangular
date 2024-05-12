import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JackSideBarBtnComponent } from './jack-side-bar-btn.component';

describe('JackSideBarBtnComponent', () => {
  let component: JackSideBarBtnComponent;
  let fixture: ComponentFixture<JackSideBarBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JackSideBarBtnComponent]
    });
    fixture = TestBed.createComponent(JackSideBarBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
