import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductbycategoryComponent } from './productbycategory/productbycategory.component';
import { ProductbyidComponent } from './productbyid/productbyid.component';
import { CartComponent } from './cart/cart.component';
import { CartproductsComponent } from './cartproducts/cartproducts.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [ProductsComponent, ProductbycategoryComponent,
    ProductbyidComponent, CartComponent,
    CartproductsComponent, CheckoutComponent, ProductsRoutingModule],
  imports: [
    CommonModule,
    NgModule
  ]
})
export class ProductsModule { }
