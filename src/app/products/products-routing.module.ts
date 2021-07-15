import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductbycategoryComponent } from './productbycategory/productbycategory.component';
import { ProductbyidComponent } from './productbyid/productbyid.component';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  { path: '', redirectTo:"/product",pathMatch:'full' },
  { path: 'product', component: ProductsComponent },
  { path: 'category/:id', component: ProductbycategoryComponent },
  { path: 'product/:id', component: ProductbyidComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
