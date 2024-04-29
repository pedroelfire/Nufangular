import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

let ruta = "user/"

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/' + ruta + "user");
  }

  getAllClient(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/' + ruta + "client");
  } 

  getAllNutritionist(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/' + ruta + "nutritionist");
  } 

}
