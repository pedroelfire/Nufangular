import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BackendURLsService {
  private apiBaseURL = 'http://127.0.0.1:8000';

  constructor() {}

  getListIngredientsURL(): string {
    return `${this.apiBaseURL}/diets/searchListIngredients/`;
  }
}
