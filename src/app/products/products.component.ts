import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productsData: any;
  productName: any;

  constructor(public api: ApiService,public cart:CartService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  searchData(){
    if(this.productName == ""){
      this.ngOnInit();
    }else{
      this.productsData = this.productsData.filter(res => {
        return res.productName.toLocaleLowerCase().match(this.productName.toLocaleLowerCase())
      })
    }
  }
  

  addToCart(p){
    this.cart.addProduct(p);
      }
    
  getProducts() {
    this.api.getAll().subscribe(data => {

      this.productsData = data;
    })
  }

}
