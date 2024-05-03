import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BackendURLsService } from './backend-urls.service';
import { Observable } from 'rxjs';
import { FoodSearchResult } from 'src/types';

@Injectable({
  providedIn: 'root',
})
export class FoodItemsService {
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
}
