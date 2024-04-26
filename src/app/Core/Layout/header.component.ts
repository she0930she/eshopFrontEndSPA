import { Component } from '@angular/core';
import { AccountService } from '../Services/account.service';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(
    private accountService: AccountService,
    private cartService: CartService,
  ){}

  isLoggedIn: boolean = false
  public cartItemCount : number = 0;
  grandTotal !: number;

  ngOnInit(){
    this.accountService.isLoggedIn.subscribe(
      p => this.isLoggedIn = p
    )

    this.cartService.cartObserve
      .subscribe( itemList => {
        this.cartItemCount = itemList.length
        this.grandTotal = this.cartService.getTotalPrice(); // need to subscribe the grandTotal cartService
      })
  }

  logOut(){
    this.accountService.logOut();
  }



}
