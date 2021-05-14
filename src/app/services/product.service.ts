import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  private offset = 0;
  private limit = 12;

  getAll(): Observable<any> {
    return this.http.get(`${baseUrl}?offset=${this.offset}&limit=${this.limit}`);
  }

  get(id): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  search(name): Observable<any> {
    return this.http.get(`${baseUrl}/search?name=${name}`);
  }

  update(id, product): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, product);
  }
}
