import { Injectable } from '@angular/core';
import { BackendURLsService } from './backend-urls.service';

@Injectable({
  providedIn: 'root',
})
export class JackService {
  // Todo: Implement Jack's API calls.

  // POST users msg. Response: Jack's Response.
  sendUserMessage(message: string) {
    console.log(message);
  }

  // GET. Init conversation. Response: Array of messages.
  fetchConversation(conversationID: number) {
    return [
      { role: 'jack', message: 'Hello, I am Jack!' },
      { role: 'user', message: 'Hi, Jack!' },
      { role: 'jack', message: 'How can I help you?' },
    ];
  }

  constructor() {}
}
