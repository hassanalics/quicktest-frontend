import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }
    
  login(email:string, password:string ): Observable<any> {
      return this.http.post<any>('/api/login', {email, password});
          // this is just the HTTP call, 
          // we still need to handle the reception of the token
          // .shareReplay();
  }
}
