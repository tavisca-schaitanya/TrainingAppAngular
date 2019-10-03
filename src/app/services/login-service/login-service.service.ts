import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user';
import { LoginResponse } from 'src/app/models/login-response';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  authenticateUser(user: User)
  {
    return this.http.post<LoginResponse>('https://localhost:44386/api/login/Authenticate', user);
  }
}
