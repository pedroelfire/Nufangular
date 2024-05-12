import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-jack-card',
  templateUrl: './jack-card.component.html',
  styleUrls: ['./jack-card.component.scss'],
})
export class JackCardComponent {
  @Input() isDisplayed!: boolean;

  jackReplied = false;

  messages = ['Hola, Jack', "Hello, I'm Jack!"];

  newMessageHandler(msg: any) {
    console.log(msg);
    this.messages.push(msg);
    this.jackReplied = false;
    setTimeout(() => {
      this.jackReplied = true;
    }, 1000);

    if (this.jackReplied) {
      setTimeout(() => {
        this.messages.push(
          "I'm sorry, I'm just a demo bot. I don't have the ability to reply to your message."
        );
      }, 2000);
    } else {
    }
  }
}
