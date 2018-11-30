import { Injectable } from '@angular/core';
import { Products } from '../Products/products';
import { Subject } from 'rxjs';
import { SessionStorage } from "angular-web-storage";

@Injectable()
export class CartService {

    @SessionStorage()
    cart:Products[];

    mycart:string;

    //Subject
    private cartSource = new Subject<string>();

    //Broadcaster
    cartBoardcaster = this.cartSource.asObservable();

    constructor(){

        if (this.mycart) {
            this.cart = JSON.parse(this.mycart);
        }
        else{
            this.cart = new Array<Products>();
        }

    }

    addProduct(product:Products):void{
        this.cart = this.cart.concat(product);
        console.log("Added to cart " + product.name);

        this.mycart = JSON.stringify(this.cart);

        //Notify to the observer
        this.cartSource.next(this.mycart);
    }

    getCartItems():Products[]{
        return this.cart;
    }
}