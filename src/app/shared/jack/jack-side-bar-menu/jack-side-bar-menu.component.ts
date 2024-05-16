import { Component, Input, Output, EventEmitter } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { JackService } from 'src/app/services/jack.service';
import { Conversation } from 'src/types';

@Component({
  selector: 'app-jack-side-bar-menu',
  templateUrl: './jack-side-bar-menu.component.html',
  styleUrls: ['./jack-side-bar-menu.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('300ms ease-in-out', style({ transform: 'translateX(0)' })),
      ]),
      transition(':leave', [
        animate('300ms ease-in-out', style({ transform: 'translateX(-100%)' })),
      ]),
    ]),
  ],
})
export class JackSideBarMenuComponent {
  @Input() displayed!: boolean;
  @Output() closeMenuEvent = new EventEmitter<void>();

  conversations: Conversation[] = [];

  constructor(private db: JackService) {}

  ngOnInit() {
    this.db.fetchConversationsList().subscribe((response) => {
      this.conversations = response;
    });
  }

  selectConversation(conversationID: number) {
    this.db.emitConversationCreated(conversationID);
    this.closeMenuEvent.emit();
  }
}
