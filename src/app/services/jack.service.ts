import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BackendURLsService } from './backend-urls.service';
import { Message, conversationMessagesResponse } from 'src/types';

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
    return this.http.post<Message>(endpoint, message);
  }

  // GET. Init conversation. Response: Array of messages.
  fetchConversation(conversationID: number) {
    const endpoint = this.backendURLs.getJackConversationURL(conversationID);
    return this.http.get<conversationMessagesResponse>(endpoint);
  }
}
