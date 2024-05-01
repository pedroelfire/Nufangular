import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from 'config'; // Import your configuration

@Injectable({
  providedIn: 'root',
})
export class FatsecretService {
  baseUrl = 'https://platform.fatsecret.com/rest/server.api';

  constructor(private http: HttpClient) {}

  searchFoods(query: string) {
    const params = {
      method: 'foods.search',
      search_expression: query,
      format: 'json',
      // ... authentication parameters (refer to FatSecret docs)
    };

    // Add authentication using your config.fatSecretAppId and config.fatSecretAppKey
    // (Details of authentication are in FatSecret's documentation)

    return this.http.get(this.baseUrl, { params });
  }
}
