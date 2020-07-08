import { Users } from './../models/users';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url = `${environment.apiUrl}/api/users`;

  constructor(private http: HttpClient) { }
  read(): Observable<Users[]>  {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get<Users[]>(`${environment.apiUrl}/api/list/users`, {headers},
    );
  }
  create(data: Users)  {
    const  headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.post<Users[]>(`${environment.apiUrl}/api/users.json`, data, { headers});
  }

  update(data: any) {
    const  headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.put(`${environment.apiUrl}/users/`, data, { headers});
  }
  delete(id: number) {
    return this.http.delete<Users[]>(`${environment.apiUrl}/api/users/` + id);
  }
  desableUser(id: number) {
    const  headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get<Users[]>(`${environment.apiUrl}/api/users/status/` + id , { headers});
  }
  desablePartenaire(id: number) {
    const  headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get<Users[]>(`${environment.apiUrl}/api/bloquer/` + id , { headers});
  }
  getId(id: number): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.put(`${environment.apiUrl}/api/users/` + id, { headers});
  }
}
