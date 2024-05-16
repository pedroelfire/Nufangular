import { Component } from '@angular/core';
import { JackService } from 'src/app/services/jack.service';

@Component({
  selector: 'app-jack-side-bar-btn',
  templateUrl: './jack-side-bar-btn.component.html',
  styleUrls: ['./jack-side-bar-btn.component.scss'],
})
export class JackSideBarBtnComponent {
  isSideBarDisplayed = false;

  constructor(private conversationDataService: JackService) {}

  toggleSideBarMenu() {
    if (this.isSideBarDisplayed) {
      this.closeSideBarMenu();
    } else {
      this.openSideBarMenu();
    }
  }

  closeSideBarMenu() {
    this.isSideBarDisplayed = false;
  }

  openSideBarMenu() {
    this.isSideBarDisplayed = true;
  }

  createConversation() {
    this.conversationDataService.emitConversationCreated(0);
  }
}
