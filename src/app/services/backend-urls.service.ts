import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BackendURLsService {
  private apiBaseURL = 'http://127.0.0.1:8000';
  constructor(private http: HttpClient) {}

  getListIngredientsURL(): string {
    return `${this.apiBaseURL}/diets/searchIngredients/`;
  }

  searchIngredient(food_id: number): Observable<any> {
    return this.http.get(
      `${this.apiBaseURL}/diets/searchIngredients/${food_id}/`
    );
  }

  createMealURL(): string {
    return `${this.apiBaseURL}/diets/createIngredientsMeal/`;
  }

  getJackConversationURL(conversationID: number): string {
    return `${this.apiBaseURL}/jack/conversationMessages/${conversationID}/`;
  }

  getJackQuestionURL(): string {
    return `${this.apiBaseURL}/jack/question/`;
  }
}
