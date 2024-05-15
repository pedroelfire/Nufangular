import { Component, Input } from '@angular/core';
import { JackService } from 'src/app/services/jack.service';
import { Message } from 'src/types';

@Component({
  selector: 'app-jack-card',
  templateUrl: './jack-card.component.html',
  styleUrls: ['./jack-card.component.scss'],
})
export class JackCardComponent {
  @Input() isDisplayed!: boolean;

  conversationID: number = 1;

  // Not waiting for Jack to reply
  jackReplied = true;

  constructor(private db: JackService) {}

  messages!: Message[];

  ngOnInit() {
    this.messages = this.db.fetchConversation(this.conversationID);
  }

  newMessageHandler(msg: Message) {
    this.jackReplied = false;
    this.messages.push(msg);

    // TODO: Send message to Jack and wait for reply

    this.jackReplied = true;
    if (this.jackReplied) {
      const response: Message = {
        role: 'jack',
        message: 'I am Jack, how can I help you?',
      };

      this.messages.push(response);
    }
  }
}
