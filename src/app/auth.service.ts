import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from './interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  API: string = 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  signup(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(`${this.API}/signup`, user);
  }
  signin(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(`${this.API}/signin`, user);
  }
}
