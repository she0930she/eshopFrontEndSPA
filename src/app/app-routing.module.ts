import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './Public/product-details.component';
import { ProductListComponent } from './Public/product-list.component';
import { OrdersComponent } from './Public/orders.component';
import { ShoppingCartComponent } from './Public/shopping-cart.component';

// define a route in navbar, connect with [routerLink] in header
const routes: Routes = [
  { path:"", component: ProductListComponent},
  { path:"Details/:id", component: ProductDetailsComponent},
  { path:"Orders", component: OrdersComponent},
  { path:"Account", loadChildren: () => import('./Account/account.module').then(m => m.AccountModule) }, // lazy loading
  { path:"ShoppingCart", component: ShoppingCartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
