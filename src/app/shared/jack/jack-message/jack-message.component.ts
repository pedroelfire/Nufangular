import { Component, Input } from '@angular/core';

import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-jack-message',
  templateUrl: './jack-message.component.html',
  styleUrls: ['./jack-message.component.scss'],
})
export class JackMessageComponent {
  @Input() message!: string;
  @Input() isLoading!: boolean;

  faUserCircle = faUserCircle;
}
