import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../models/user';
import { LoginServiceService } from '../services/login-service/login-service.service';
import { LoginResponse } from '../models/login-response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginServiceService) { }

  ngOnInit() {
  }

  userData: User = { emailId: "", password: "", role: -1};
  loginResponse: LoginResponse;
  status: boolean = true;
  success: boolean = false;

  authenticate()
  {
    this.loginService.authenticateUser(this.userData).subscribe(
      data =>
      {
        this.loginResponse = data;
        this.status = this.loginResponse.responseStatus;
        if(this.status)
          this.success = true;
        else
          this.success = false;
      }
    );
  }

}
