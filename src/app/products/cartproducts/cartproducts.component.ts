import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cartproducts',
  templateUrl: './cartproducts.component.html',
  styleUrls: ['./cartproducts.component.css']
})
export class CartproductsComponent implements OnInit {
  @Input() checkout_products: any[];
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter();

  constructor(public shopping_cart_s: CartService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  removeItem(p) {
    this.shopping_cart_s.removerItem(p);
    this.deleteEvent.emit(p);
    this.toastr.error('Product deleted success!', 'Amazone!');

  }


}//end
