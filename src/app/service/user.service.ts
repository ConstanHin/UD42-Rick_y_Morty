import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = "http://localhost:3000/api/test/"

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.httpClient.get(API_URL + 'all')
  }
  getUserBoard(): Observable<any> {
    return this.httpClient.get(API_URL + 'user')
  }
  getModeratorBoard(): Observable<any> {
    return this.httpClient.get(API_URL + 'mod')
  }
  getAdminBoard(): Observable<any> {
    return this.httpClient.get(API_URL + 'admin')
  }
}
