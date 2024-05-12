import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JackSideBarMenuComponent } from './jack-side-bar-menu.component';

describe('JackSideBarMenuComponent', () => {
  let component: JackSideBarMenuComponent;
  let fixture: ComponentFixture<JackSideBarMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JackSideBarMenuComponent]
    });
    fixture = TestBed.createComponent(JackSideBarMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
