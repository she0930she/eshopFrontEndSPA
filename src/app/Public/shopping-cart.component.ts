import { Component } from '@angular/core';
import { ProductService } from '../Core/Services/product.service';
import { ProductListComponent } from './product-list.component';
import { Product, cartItem } from '../Shared/Models/Product';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {

  constructor(
    private productService: ProductService,
    // private productListComponent: ProductListComponent,
  ){}

  productList: Product[]=[];
  cartItemList: cartItem[] = [];
  grandTotal: number = 0;

  ngOnInit(){
    //this.productListComponent
  }

  removeItem(item: cartItem){}

  emptycart(){}

}
