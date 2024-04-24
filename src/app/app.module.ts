import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './Public/product-list.component';
import { ProductDetailsComponent } from './Public/product-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrdersComponent } from './Public/orders.component';
import { FormBuilder, FormsModule } from '@angular/forms';
import { CoreModule } from './Core/core.module';
import { SharedModule } from './Shared/shared.module';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from './Core/Interceptors/jwt.interceptor';
import { ShoppingCartComponent } from './Public/shopping-cart.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailsComponent,
    OrdersComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    CoreModule,
    SharedModule,
    MdbRippleModule,
    HttpClientModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
