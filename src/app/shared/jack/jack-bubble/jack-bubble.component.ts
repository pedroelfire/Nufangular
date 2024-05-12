import { Component } from '@angular/core';
import { faRobot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-jack-bubble',
  templateUrl: './jack-bubble.component.html',
  styleUrls: ['./jack-bubble.component.scss'],
})
export class JackBubbleComponent {
  faRobot = faRobot;

  jackCardDisplayed = false;

  toggleJackCard() {
    this.jackCardDisplayed = !this.jackCardDisplayed;
  }
}
