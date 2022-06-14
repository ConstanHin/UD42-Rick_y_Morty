import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  apiUrl: string = "http://localhost:3000/characters";
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  // Get list
  list(): Observable<any> {
    return this.httpClient.get(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  // // Get one by id

  // getItem(id: any): Observable<any> {
  //   return this.httpClient.get(`${this.apiUrl}/${id}`).pipe(
  //     catchError(this.handleError)
  //   );
  // }

  // Create new

  create(data: any): Observable<any> {
    return this.httpClient.post(this.apiUrl, data).pipe(
      catchError(this.handleError)
    );
  }

  // Update
  update(id:any, data:any): Observable<any> {
    return this.httpClient.put(this.apiUrl + `/${id}`, data).pipe(
      catchError(this.handleError)
    );
  }

  // Delete

  delete(id: any): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    )
  }

  // //Get by title
  // getByTitle(title: any): Observable<any> {
  //   return this.httpClient.get(`${this.apiUrl}?title_like=${title}`).pipe(

  //   )
  // }

  //Handle errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error ocurred:', error.error.message)
    } else {
      console.error(
        `Backend  returned code ${error.status},
        body was: ${error.error}`
      )
    }
    return throwError(() => new Error('Something bad happened, pls try again later.'));
  }
}
