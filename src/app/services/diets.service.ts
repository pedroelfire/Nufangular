import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DietsService {
  private apiUrl = 'http://127.0.0.1:8000/diets/';

  constructor(private http: HttpClient) { }
  createDiet(name: string, created_by: number){
    return this.http.post(this.apiUrl + "diets/", { name, created_by });
  }

  getAllDiets(){
    return this.http.get(this.apiUrl + "diets/")
  }

  getAllMeals(nutriologo: number): Observable<any>{
    return this.http.get<any>(this.apiUrl + "meals/", { params: { nutriologo: nutriologo.toString() } } )
  }
}
