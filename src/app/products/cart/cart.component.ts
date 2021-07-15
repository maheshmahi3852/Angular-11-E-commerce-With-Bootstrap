import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items:any[];

  constructor(public cart:CartService,public toastr:ToastrService) { }

  ngOnInit(): void {
    this.getShoppingCart();
  }

  getShoppingCart(){
    this.items = this.cart.get_shopping_cart_items();
  }
   deleteEventHandler(p){
     this.getShoppingCart();
   }
  


}
