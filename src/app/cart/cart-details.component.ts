import { Component } from '@angular/core';
import { CartService } from './cart.service';
import { Products } from '../Products/products';

@Component({
    selector: 'app-cart-detail',
    templateUrl: './cart-details.component.html',
    styleUrls: ['./cart-details.component.css'],
    //providers: [CartService]
})
export class CartDetailComponent {

    cartProducts:Products[];
    cartService:CartService;

    constructor(cartService:CartService) { 
        this.cartService = cartService;

        this.cartService.cartBoardcaster.subscribe(res => {
            this.cartProducts = JSON.parse(res);
        })

        this.cartProducts = this.cartService.getCartItems();
    }

}
