import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{signup} from '../models/signup';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  CreateAccountService(model: signup): Observable<any> {
    return this.http.post('apiurl/signup', model);
  }
}
