import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

let ruta = "user/user"

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://127.0.0.1:8000/' + ruta
  constructor(private http: HttpClient) { }

  login(Username: string, Password: string){
    return this.http.post(this.apiUrl, [Username, Password] );
  }
}