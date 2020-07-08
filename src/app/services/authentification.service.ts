import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  getConnexion(user: User) {
    return this.http.post<User>(`${environment.apiUrl}/api/login_check`, user)
      // tslint:disable-next-line: no-shadowed-variable
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        const decoder  = jwt_decode(user.token);
        localStorage.setItem('currentUser', JSON.stringify(user));
        localStorage.setItem('roles', JSON.stringify(decoder.roles));
        localStorage.setItem('email', JSON.stringify(decoder.email));
        this.currentUserSubject.next(user);
        return user;
      }));
  }
  getToken() {
    return localStorage.getItem('roles');
  }
  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
