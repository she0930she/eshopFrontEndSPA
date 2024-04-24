import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JsonTest } from 'src/app/Shared/Models/jsonTest';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private azGetAllProductsURL = "https://orderapp.jollyforest-496decb9.westus2.azurecontainerapps.io/api/Product/getAllProducts"
  private dockerGetAllProductsURL = "http://localhost:1551/api/Product/getAllProducts"
  private url = "https://jsonplaceholder.typicode.com/posts"
  //private dockerloginURL = "http://localhost:1550/api/User/login"

  // type of "HttpClient"
  constructor(
    private httpClient:HttpClient,
  ) { }


  getAllProductLists(): Observable<any> {
    console.log("azGetAllProductsURL: ", this.azGetAllProductsURL)
    return this.httpClient.get(this.azGetAllProductsURL);
  }






  getJsonTestPosts(){
    return this.httpClient.get<JsonTest>(this.url);  
    // specify the type in <>
  }
}
