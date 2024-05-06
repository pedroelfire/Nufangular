import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class BackendURLsService {
  private apiBaseURL = 'http://127.0.0.1:8000';
  constructor(
    private http: HttpClient
  ) {}

  getListIngredientsURL(): string {
    return `${this.apiBaseURL}/diets/searchListIngredients/`;
  }

  searchIngredient(food_id: number): Observable<any> {
    return this.http.get(`${this.apiBaseURL}/diets/searchIngredient/${food_id}/`);}
}