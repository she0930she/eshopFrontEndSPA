import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { Login, LoginResponse } from '../Shared/Models/Login';
import { AccountService } from '../Core/Services/account.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private router: Router,
  ){}

  invalidLogin: boolean = false;
  successLogin: boolean = false;
  loginData: Login = {  // type of Login, then initilize it
    email : "",
    password: ""
  }
  LoginResponse: LoginResponse = {
    userId: 0,
    fullName: "",
    email: "",
    jwtToken: "",
    expiresIn: 0,
  }

  // reactiveForm from html
  loginForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]],
  });



  get LoginFormControl(){
    return this.loginForm.controls;
  }
  

  verifyLogin(){
    if (this.loginForm.valid){
      const loginControl = this.loginForm.controls;
      this.loginData.email = loginControl['email'].value;
      this.loginData.password = loginControl['password'].value;
      console.log("loginData: ", this.loginData)

      this.accountService.verifyLogin(this.loginData).subscribe(
        data =>{
          //console.log("in service call1: ", data)
          this.LoginResponse = data
          
          if (this.LoginResponse.jwtToken != "" && this.LoginResponse.expiresIn > 0){
            this.successLogin = true;
            localStorage.setItem("token", this.LoginResponse.jwtToken)
            localStorage.setItem("userId", this.LoginResponse.userId.toString())
            localStorage.setItem("loginTime", Date.now().toString())

            this.accountService.populateUserInfoFromToken(this.LoginResponse)

          }else{
            this.invalidLogin = true;
          }

          console.log("this.LoginResponse: ", this.LoginResponse)
          this.router.navigateByUrl("/")
        })
    }
  }
  login(){

  }

}
