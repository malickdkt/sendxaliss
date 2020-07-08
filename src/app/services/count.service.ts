import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountService {

  private url = `${environment.apiUrl}/api/count`;
  constructor(private http: HttpClient) { }
  getCount(): Observable<any[]> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get<any[]>(this.url, { headers },
    );
  }

  partEnvoi(): Observable<any[]> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer' + localStorage.getItem('token'));
    return this.http.get<any[]>(`${environment.apiUrl}/api/liste/parts/retraits`, { headers });
  }
  partRetrait(): Observable<any[]> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer' + localStorage.getItem('token'));
    return this.http.get<any[]>(`${environment.apiUrl}/api/liste/parts/envois`, { headers });
  }
}
