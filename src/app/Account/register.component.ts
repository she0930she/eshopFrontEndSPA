import { Component } from '@angular/core';
import { Register } from '../Shared/Models/Register';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../Core/Services/account.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private router: Router,
  ){}

  // sending to DB
  registerData: Register = {
    fullName: "",
    email: "",
    password: "",
  }

  // reactiveForm from html
  registerForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]],
  });
  isSubmitted: boolean = false;
  failedSubmit: boolean = false;


  get RegisterFormControl(){
    return this.registerForm.controls;
  }
  
  testRegister(){
    this.accountService.getTestCORS().subscribe(
      data => {
        console.log("in testRegister(): ")
        if (data){
          console.log("has data: ", data)
        }
        else{
          console.log("no data: ")
        }
      })
  }

  createUser(){
    //console.log("form: ", this.registerForm.controls['name'].value)
    console.log("valid: ", this.registerForm.valid)
    if (this.registerForm.valid){

      const registerControl = this.registerForm.controls;
      this.registerData.fullName = registerControl['name'].value;
      this.registerData.email = registerControl['email'].value;
      this.registerData.password = registerControl['password'].value;
      console.log("registerData: ", this.registerData)

      this.accountService.createUser(this.registerData)
        .subscribe( data =>{
          console.log("in login call1: ", data)
          if (data){
            this.isSubmitted = true;
            setTimeout( () => {
              this.router.navigateByUrl('Account/Login');
            }, 1000)
            console.log("createUser data after service call: ", data)
          }
          else{
            this.failedSubmit = true
          }
        })
    }
  }


}
