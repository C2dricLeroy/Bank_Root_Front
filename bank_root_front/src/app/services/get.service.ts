import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer' + localStorage.getItem('JWT_TOKEN'),
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getRequests() {
    return this.httpClient.get('/account-request/all', this.httpOptions);
  }

  getAccount() {
    return this.httpClient.get('/user');
  }
}
