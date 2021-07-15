import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 
@Input()  productsData: any;
productName : any;
  users: any;
  constructor(public cart:CartService,public api: ApiService) { }

  ngOnInit(): void {
  }



}
