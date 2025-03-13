import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  baseURL="http://localhost:5009/api"

  createUser(FormData :any){
    return this.http.post(`${this.baseURL}/signup`,FormData)
  }

  signin(FormData :any){
    return this.http.post(`${this.baseURL}/signin`,FormData)
  }
}
