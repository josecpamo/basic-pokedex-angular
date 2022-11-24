import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiFetchService {
  constructor(private http: HttpClient) {}

  getData(url: string) {
    return this.http.get(url);
  }
}
