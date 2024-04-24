import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JsonTest } from 'src/app/Shared/Models/jsonTest';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = "https://jsonplaceholder.typicode.com/posts"
  private dockerGetAllProductsURL = "http://localhost:1551/api/Product/getAllProducts"
  //private dockerloginURL = "http://localhost:1550/api/User/login"

  // type of "HttpClient"
  constructor(
    private httpClient:HttpClient,
  ) { }


  getAllProductLists(): Observable<any> {
    console.log("dockerGetAllProductsURL: ", this.dockerGetAllProductsURL)
    return this.httpClient.get(this.dockerGetAllProductsURL);
  }






  getJsonTestPosts(){
    return this.httpClient.get<JsonTest>(this.url);  
    // specify the type in <>
  }
}
