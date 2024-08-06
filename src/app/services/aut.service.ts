import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../models/user';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  login(user: IUser): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, user);
  }

  register(user: IUser): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
}
