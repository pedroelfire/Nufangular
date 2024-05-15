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
    this.isSideBarDisplayed = !this.isSideBarDisplayed;
  }

  createConversation() {
    this.conversationDataService.emitConversationCreated(0);
  }
}
