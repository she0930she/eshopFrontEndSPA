import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';
import { Login, LoginResponse, User } from 'src/app/Shared/Models/Login';
import { Register } from 'src/app/Shared/Models/Register';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  // behaviorObj control loggedin info
  private isLoggedInSubject = new BehaviorSubject<boolean>(false); // internal service class used
  public isLoggedIn = this.isLoggedInSubject.asObservable(); // ready to be called outside of service class

  private currentUserObject = new BehaviorSubject<User>({} as User);
  public currentUser = this.currentUserObject.asObservable();

  jwtHelper = new JwtHelperService();

  // url
  private url = "https://customerapiapp.calmsea-bee3f815.westus2.azurecontainerapps.io/api/User/createNewUser"
  private azRegisterURL = "https://customerapp.jollyforest-496decb9.westus2.azurecontainerapps.io/api/User/createNewUser"
  private azLoginURL = "https://customerapp.jollyforest-496decb9.westus2.azurecontainerapps.io/api/User/login"
  private dockerRegisterURL = "http://localhost:1550/api/User/createNewUser"
  private dockerloginURL = "http://localhost:1550/api/User/login"
  private testCORSUrl = "http://example.com"
  private testCORSGet = "http://localhost:1550/api/Admin/getAllUsersTest"


  // type of "HttpClient"
  constructor(
    private httpClient:HttpClient,
  ) { }

  verifyLogin(loginData: Login){ // Login data type
    return this.httpClient.post<LoginResponse>(this.azLoginURL, loginData)
    
  }

  logOut(){
    localStorage.clear();
    this.isLoggedInSubject.next(false); // not logged in anymore
    this.currentUserObject.next({} as User); // empty userObj
  }

  createUser(registerData: Register): Observable<boolean>{
    let headers = new HttpHeaders()
    console.log("azRegisterURL link: ", this.azRegisterURL)
     // TODO: add header
    return this.httpClient.post<boolean>(this.azRegisterURL, registerData)
  }

  populateUserInfoFromToken(loginResponse: LoginResponse){
    var token = localStorage.getItem("token")

    if (token && !this.jwtHelper.isTokenExpired(token)){
      const decodeToken = this.jwtHelper.decodeToken(token);

      this.currentUserObject.next(decodeToken) // TODO: what??
      this.isLoggedInSubject.next(true)
    }else{
      console.log("token expired or token not in localStorage")
      this.logOut()
    }

  }




  getTestCORS(): Observable<any> {
    console.log("url link: ", this.testCORSUrl)
    return this.httpClient.get(this.testCORSUrl);
  }

}
