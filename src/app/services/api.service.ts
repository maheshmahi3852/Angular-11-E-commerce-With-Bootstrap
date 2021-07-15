import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public baseUrl = 'http://localhost:3000/products';
  constructor(public http: HttpClient) { }

  getAll() {
    return this.http.get(this.baseUrl);
  }
  getProductById(productId): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${productId}`);
  }
  searchByCategory(categoryId): Observable<any> {
    const productUrl = 'http://localhost:3000/products?categoryId=' + categoryId;
    return this.http.get<any>(productUrl);
  }
  getCategory(): Observable<any> {
    const categoriesUrl = 'http://localhost:3000/categories';
    return this.http.get<any>(categoriesUrl);
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }


}
