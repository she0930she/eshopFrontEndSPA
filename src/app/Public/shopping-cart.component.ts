import { Component, Input } from '@angular/core';
import { ProductService } from '../Core/Services/product.service';
import { ProductListComponent } from './product-list.component';
import { CartItem, Product } from '../Shared/Models/Product';
import { CartService } from '../Core/Services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {

  constructor(
    private cartService: CartService,
  ){}

  cartItemList: CartItem[] = [];
  grandTotal !: number;

  ngOnInit(){
    this.cartService.cartObserve.subscribe( item =>{
      this.grandTotal = this.cartService.getTotalPrice()
      this.cartItemList = item
      console.log("shopping service item: ", item)
    })
  }

  viewShoppingCart(){
    this.cartService.cartObserve.subscribe( item => {
      console.log("shopping service item: ", item)
    })
  }

  removeItem(item: CartItem){}

  emptycart(){}

  checkOut(){
    alert("you have successfully placed an order." );
  }
}
