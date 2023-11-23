import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { NavigationBarComponent } from './headers/navigation-bar/navigation-bar.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrdersComponent } from './orders/orders.component';
import { AdminComponent } from './admin/admin.component';
import { AdminNavigationBarComponent } from './admin/admin-navigation-bar/admin-navigation-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductManagerComponent,
    NavigationBarComponent,
    CartComponent,
    CheckoutComponent,
    OrdersComponent,
    AdminComponent,
    AdminNavigationBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
