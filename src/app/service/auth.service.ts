import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = "http://localhost:3000/api/auth/"

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpCliente: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.httpCliente.post(AUTH_API + 'signin', {
      username: username,
      password: password
    }, httpOptions);
  }

  register(username: string, password: string, email: string): Observable<any> {
    return this.httpCliente.post(AUTH_API + 'signup', {
      username: username,
      password: password,
      email: email
    }, httpOptions);
  }
}
