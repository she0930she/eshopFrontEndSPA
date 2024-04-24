import { Component } from '@angular/core';
import { Product } from '../Shared/Models/Product';
import { ProductService } from '../Core/Services/product.service';
import { JsonTest } from '../Shared/Models/jsonTest';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {

  constructor(private productService: ProductService){}

  productsList: Product[] = [];
  mockJsonTestObj: any;
  product: Product ={
    Id : 0,
    productName : "",
    unitPrice : 0,
    stockQuantity : 0,
    pictureUrl : "",
    description: ""
  }
  public shoppingCartProducts: Product[] = [];


  // angular lifecycle hooks

  ngOnInit(): void {
    this.getAllProducts();
  //  for (let i = 0; i< 5; i++){
  //   this.productsList.push({Id: i, Name:"Example"})
   }

  addToCart(product: Product){
    this.shoppingCartProducts.push(product);
    console.log("shoppingCartProducts: ", this.shoppingCartProducts)
  }
  deleteFromCart(product: Product){
    this.shoppingCartProducts = this.shoppingCartProducts.filter(
      i => i.Id !== product.Id
    )
  }

  viewShoppingCart(){
    
  }

  getAllProducts(){
    this.productService.getAllProductLists().subscribe(
      dataList => {
        console.log("dataList", dataList)
        this.productsList = dataList
        console.log("productsList", this.productsList)
      })
      
  }





     // get JSONTest mock
  // this.productService.getJsonTestPosts().subscribe(
  //   (data) => {this.mockJsonTestObj = data;
  //     //console.log(this.mockJsonTestObj)
  //     //console.log(data);
  //   },
  //   (error) => { console.log(error); }
  // )}



}
