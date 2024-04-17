import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://127.0.0.1:8000/user/auth/';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    // Obtener el token CSRF de la cookie
    const csrfToken = this.getCookie('csrftoken');

    // Construir el encabezado con el token CSRF
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-CSRFToken': csrfToken
    });

    // Realizar la solicitud POST con el encabezado personalizado
    return this.http.post<any>(this.apiUrl, { username, password }, { headers });
  }

  private getCookie(name: string): string {
    const cookieValue = document.cookie
      .split('; ')
      .find(row => row.startsWith(name))
      ?.split('=')[1];
    return cookieValue || '';
  }
}
