import { Component } from '@angular/core';

@Component({
  selector: 'app-jack-side-bar-btn',
  templateUrl: './jack-side-bar-btn.component.html',
  styleUrls: ['./jack-side-bar-btn.component.scss'],
})
export class JackSideBarBtnComponent {
  isSideBarDisplayed = false;

  toggleSideBarMenu() {
    this.isSideBarDisplayed = !this.isSideBarDisplayed;
  }
}
