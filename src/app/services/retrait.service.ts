import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RetraitService {

  constructor(private httpClient: HttpClient) { }
  retraits(retrait) {
    return this.httpClient.post<any>(`${environment.apiUrl}/api/transaction`, retrait);
  }
  searchByCode(code) {
    return this.httpClient.get<any>(`${environment.apiUrl}/api/transaction?code=${code}`);
  }

  setRetrait(retrait) {
    console.log(retrait);
    return this.httpClient.post<any>(`${environment.apiUrl}/api/transaction`, retrait);
  }

  getCode(code) {
    const data = {
      code
    };
    console.log(data);
    return this.httpClient.get<any>(`${environment.apiUrl}/api/transaction?code=${code}`);
  }
}
