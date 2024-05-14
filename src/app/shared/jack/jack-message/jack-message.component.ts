import { Component, Input } from '@angular/core';

import { faUserCircle, faRobot } from '@fortawesome/free-solid-svg-icons';
import { Message } from 'src/types';

@Component({
  selector: 'app-jack-message',
  templateUrl: './jack-message.component.html',
  styleUrls: ['./jack-message.component.scss'],
})
export class JackMessageComponent {
  @Input() message!: Message;

  faUserCircle = faUserCircle;
  faRobot = faRobot;
}
