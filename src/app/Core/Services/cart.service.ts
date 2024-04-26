import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem, Product } from 'src/app/Shared/Models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  private itemArray : CartItem[] = [];
  private shoppingCartSubject = new BehaviorSubject<CartItem[]>([]);
  private shoppingList: CartItem[] = this.shoppingCartSubject.getValue(); // getArray
  public cartObserve = this.shoppingCartSubject.asObservable();

  addToCart(cartItem: CartItem){

    this.itemArray.push(cartItem)
    this.shoppingCartSubject.next(this.itemArray) // assign array
    this.getTotalPrice()

  }

  removeFromCart(cartItem: CartItem){
    //const shoppingList: CartItem[] = this.shoppingCartSubject.getValue(); // getArray

    this.itemArray.map((item, index) => {  //TODO: foreach() works?
      if (item.id === cartItem.id){
        this.itemArray.splice(index, 1); // splice thru index
      }
    })

    this.shoppingCartSubject.next(this.itemArray); // connect modified array
  }

  emptyTheCart(){
    this.shoppingCartSubject.next([]); // assign empty array
  }

  getTotalPrice() : number{
    let grandTotal = 0;
    this.itemArray.map((cartItem: CartItem) => {
      grandTotal += cartItem.total
    })
    return grandTotal;
  }

  isProductInCart(product: Product): boolean{
    var res = this.itemArray.find(
      (item) => 
        { 
          return item.id === product.id
        }
     );
    console.log("in res: ", res)
    return res? true: false;
  }

  updateProductWithQty(product: Product, qty: number){
    this.itemArray.forEach((item, index) => { 
      if (item.id === product.id){
        var thisItem = this.itemArray[index]
        thisItem.quantity += qty; 
        thisItem.total = thisItem.quantity * thisItem.unitPrice
      }
    })
    this.shoppingCartSubject.next(this.itemArray)
  }



}
