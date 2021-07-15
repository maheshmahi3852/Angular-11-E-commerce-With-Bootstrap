import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-productbycategory',
  templateUrl: './productbycategory.component.html',
  styleUrls: ['./productbycategory.component.css']
})
export class ProductbycategoryComponent implements OnInit {

  getId: any;
  product: any;
  cat: any;
  constructor(public api: ApiService, private routeId: ActivatedRoute,public cart:CartService) { }

  ngOnInit(): void {
    this.routeId.params.subscribe(data => {
      this.getId = data.id;
      this.getCatId();

    });

  this.getCat();

  }//ng oninit end

  getCatId(){
    this.api.searchByCategory(this.getId).subscribe(data => {
      this.product = data;
      console.log(this.product);
    });

  }

  getCat(){
    this.api.getCategory().subscribe(res => {
      this.cat = res;

    });
  }
  addToCart(p){
    this.cart.addProduct(p);
      }
    


} // end

