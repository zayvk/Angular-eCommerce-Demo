import { Component, OnInit } from '@angular/core';
import { Products } from '../Products/products';
import { ProductsService } from '../Products/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  providers: [ProductsService]
})
export class ProductDetailsComponent implements OnInit {

  productname:string;
  productId:number;
  products:Products[];
  constructor(private productservice:ProductsService, private activatedRoute:ActivatedRoute) {

    this.products = productservice.getProducts();

   }

  ngOnInit() {

    this.activatedRoute.params.subscribe(parameters => {
      this.productId = parseInt(parameters['id'])
    })
  }

}
