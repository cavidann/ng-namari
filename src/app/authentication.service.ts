import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  apiUrl = 'api/users';

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }



  signup(formData: NgForm) {
    return this.http.post<any>( `${this.apiUrl}/Signup`, formData).pipe(
      tap(user => {
        console.log(user);
      }),
      catchError(this.handleError('getHeroes', []))
    );
  }

  login(formData: NgForm) {
    return this.http.post<any>( `${this.apiUrl}/Login`, formData).pipe(
      tap(user => {
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
      }),
      catchError(this.handleError('getHeroes', []))
    );
  }

  logout() {
    if (localStorage.getItem('currentUser')) {
      localStorage.removeItem('currentUser');
      this.router.navigate(['/Home']);
    }
  }

  isLoggedIn() {
    if (localStorage.getItem('currentUser')) {
      return true;
    } else {
      return false;
    }
  }

  getUser() {
    if (this.isLoggedIn) {
      // console.log(JSON.parse(localStorage.getItem('currentUser')));
      return JSON.parse(localStorage.getItem('currentUser'));
    }
  }

}