import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/Shared/Models/Login';
import { AccountService } from '../Services/account.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
// interceptor "INTERCEPTS" HTTP requests and responses

  constructor(
    private accountService: AccountService,
  ) {}
  
  isLoggedIn: boolean = false
  currentUser: User = {} as User;


  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    const loginTime = localStorage.getItem("LoginTime");
    
    this.accountService.isLoggedIn.subscribe(
      p => {this.isLoggedIn = p; }
    )

    this.accountService.currentUser.subscribe(
      p => {this.currentUser = p; }
    )

    var token = localStorage.getItem("token")

    // check if token expired?
    if (this.isLoggedIn){
      var timeSinceLogin = Date.now() - Number(loginTime)
      // token not expired
      if (! this.accountService.jwtHelper.isTokenExpired(token) ){
        console.log("request1: ", request)
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        })


      }else{
        // expired
        localStorage.clear()
      }
    }
    
    console.log("request2: ", request)

    return next.handle(request);
  }
}
