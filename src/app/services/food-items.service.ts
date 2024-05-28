import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BackendURLsService } from './backend-urls.service';
import { Observable, Subject } from 'rxjs';
import { FoodSearchResult, Meal, MealFormIngredient } from 'src/types';

@Injectable({
  providedIn: 'root',
})
export class FoodItemsService {
  private mealAddedSource = new Subject<Meal>();
  mealAdded$ = this.mealAddedSource.asObservable();

  constructor(
    private http: HttpClient,
    private backendURLs: BackendURLsService
  ) {}

  searchFoodItems(query: string): Observable<any> {
    const apiEndpoint = this.backendURLs.getListIngredientsURL();
    return this.http.post(apiEndpoint, {
      query_search: query,
    });
  }

  createMeal(meal: any): Observable<any> {
    const apiEndpoint = this.backendURLs.createMealURL();
    return this.http.post(apiEndpoint, meal);
  }

  emitMealAdded(meal: Meal) {
    this.mealAddedSource.next(meal);
  }
}
