import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-productbyid',
  templateUrl: './productbyid.component.html',
  styleUrls: ['./productbyid.component.css']
})
export class ProductbyidComponent implements OnInit {

  productId = 0;
  productData: any;

  constructor(private activatedRoute: ActivatedRoute,public api:ApiService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.productId = data.id;
    });

    this.api.getProductById(this.productId).subscribe(data => {
      this.productData = data;
    });
  }//on init end



}//end
