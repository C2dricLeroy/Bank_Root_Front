import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetService {
  private url = 'http://152.228.163.78:3000/';
  constructor(private httpClient: HttpClient) {}

  getRequests() {
    return this.httpClient.get('/account-request/all');
  }

  getAccount() {
    return this.httpClient.get('/user');
  }
}
