import { Injectable } from '@angular/core';
import { Products } from './products';

@Injectable()
export class ProductsService {
    private products:Products[];

    constructor(){
        console.log('Product Service running...');
        let p1 = new Products(1, "OnePlus 5", "./assets/images/1.jpg", 37999, "Mobile");
        let p2 = new Products(2, "Moto G5 Plus", "./assets/images/2.jpg", 13999, "Mobile");
        let p3 = new Products(3, "Nokia 6", "./assets/images/3.jpg", 14999, "Mobile");
        let p4 = new Products(4, "Samsung Galaxy Note 8", "./assets/images/4.jpg", 67900, "Mobile");
        let p5 = new Products(5, "Apple Iphone 8", "./assets/images/5.jpg", 64000, "Mobile");
        let p6 = new Products(6, "Dell Laptop", "./assets/images/6.jpg", 52000, "Laptop");
        let p7 = new Products(7, "Canon DSLR", "./assets/images/7.jpg", 65000, "Camera");
        let p8 = new Products(8, "HP Printer", "./assets/images/8.jpg", 4000, "Printer");
        let p9 = new Products(9, "Apple iPad", "./assets/images/9.jpg", 24900, "Tab");
        this.products = new Array<Products>();
        this.products.push(p1);
        this.products.push(p2);
        this.products.push(p3);
        this.products.push(p4);
        this.products.push(p5);
        this.products.push(p6);
        this.products.push(p7);
        this.products.push(p8);
        this.products.push(p9);

    }

    getProducts():Array<Products>{
        return this.products;
    }
}