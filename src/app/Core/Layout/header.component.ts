import { Component } from '@angular/core';
import { AccountService } from '../Services/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(
    private accountService: AccountService,
  ){}

  isLoggedIn: boolean = false
  public totalItem : number = 0;

  ngOnInit(){
    this.accountService.isLoggedIn.subscribe(
      p => this.isLoggedIn = p
    )
  }

  logOut(){
    this.accountService.logOut();
  }



}
