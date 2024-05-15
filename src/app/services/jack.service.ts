import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BackendURLsService } from './backend-urls.service';
import { Message } from 'src/types';

@Injectable({
  providedIn: 'root',
})
export class JackService {
  // Todo: Implement Jack's API calls.
  constructor(
    private http: HttpClient,
    private backendURLs: BackendURLsService
  ) {}

  // POST users msg. Response: Jack's Response.
  sendUserMessage(message: Message) {
    const endpoint = this.backendURLs.getJackQuestionURL();
    // TODO hacer POST y enviar mensaje a Jack
    console.log(message);
  }

  // GET. Init conversation. Response: Array of messages.
  fetchConversation(conversationID: number) {
    const endpoint = this.backendURLs.getJackConversationURL(conversationID);
    this.http.get(endpoint).subscribe((response) => {
      console.log(response);
    });

    // return [
    //   { role: 'jack', message: 'Hello, I am Jack!' },
    //   { role: 'user', message: 'Hi, Jack!' },
    //   { role: 'jack', message: 'How can I help you?' },
    // ];
  }
}
