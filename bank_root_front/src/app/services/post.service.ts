import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private url = 'http://152.228.163.78:3000/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
  };
  constructor(private httpClient: HttpClient) {}

  register(data: any) {
    return this.httpClient.post('auth/register', data, this.httpOptions);
  }
}
