import { Component } from '@angular/core';
import { CartItem, Product } from '../Shared/Models/Product';
import { ProductService } from '../Core/Services/product.service';
import { Title } from '@angular/platform-browser';
import { CartService } from '../Core/Services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {

  constructor(
    private productService: ProductService,
    private cartService: CartService,
  ){}

  productDisplay: Product[] = [];
  itemList: CartItem[] = []
  //grandTotal !: number ; //

  //public shoppingCartProducts: Product[] = [];


  // angular lifecycle hooks

  ngOnInit(): void {
    this.getAllProducts();
    this.cartService.cartObserve.subscribe( res =>{
      this.itemList = res;
    })
   }

  addToCart(product: Product){
  var cartItem : CartItem ={
    id : 0,
    productName : "",
    unitPrice : 0,
    stockQuantity : 0,
    quantity: 0,
    pictureUrl : "",
    description: "",
    total: 0,
  }
    // product in cart
    if (this.cartService.isProductInCart(product)){ 
      //increment qty
      this.cartService.updateProductWithQty(product, 1)
      // this.cartService.cartList.subscribe( item => {
      //   console.log("cartList service item 11: ", item)
      // })
      return
    }
    // product not in cart
    this.assignProductToCartItem(product, cartItem)

    this.cartService.addToCart(cartItem)
    this.cartService.cartObserve.subscribe( item => {
      console.log("proList-cartList service item: ", item)
    })

  }

  assignProductToCartItem(product: Product, cartItem: CartItem){
    cartItem.id = product.id
    cartItem.productName = product.productName
    cartItem.unitPrice = product.unitPrice
    cartItem.stockQuantity = product.stockQuantity
    cartItem.quantity = 1
    cartItem.pictureUrl = product.pictureUrl
    cartItem.description = product.description
    cartItem.total = cartItem.unitPrice * cartItem.quantity
  }
  // deleteFromCart(product: Product){
  //   this.shoppingCartProducts = this.shoppingCartProducts.filter(
  //     i => i.Id !== product.Id
  //   )
  // }

  viewShoppingCart(){
    
  }

  getAllProducts(){
    this.productService.getAllProductLists().subscribe(
      dataList => {
        console.log("dataList", dataList)
        this.productDisplay = dataList
        console.log("productDisplay", this.productDisplay)
      })
      
  }

}
