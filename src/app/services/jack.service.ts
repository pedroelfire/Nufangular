import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BackendURLsService } from './backend-urls.service';
import { Conversation, Message, conversationMessagesResponse } from 'src/types';

@Injectable({
  providedIn: 'root',
})
export class JackService {
  constructor(
    private http: HttpClient,
    private backendURLs: BackendURLsService
  ) {}

  private conversationCreatedSoruce = new Subject<number>();

  conversationCreated$ = this.conversationCreatedSoruce.asObservable();

  emitConversationCreated(userID: number) {
    this.conversationCreatedSoruce.next(userID);
  }

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

  // GET. List of conversations. Response: Array of conversations.
  fetchConversationsList() {
    const endpoint = this.backendURLs.getJackConversationsListURL();
    return this.http.get<Conversation[]>(endpoint);
  }
}
