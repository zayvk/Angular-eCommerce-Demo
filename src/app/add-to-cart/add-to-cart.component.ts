import { Component, Input } from '@angular/core';
import { Products } from '../Products/products';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css'],
  //providers: [CartService]
})

export class AddToCartComponent  {

  @Input()
  selectedProduct:Products
  constructor(private cartService:CartService) { }

  addProduct(){
    alert(this.selectedProduct.name);
    this.cartService.addProduct(this.selectedProduct);
  }
 

}
