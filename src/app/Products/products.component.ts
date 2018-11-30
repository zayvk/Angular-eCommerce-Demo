import { Component } from '@angular/core';
import { ProductsService } from './products.service';
import { Products } from './products';

@Component({
    selector: 'products',
    templateUrl: './products.component.html',
    styleUrls : ['./products.component.css'],
    providers: [ProductsService]
})
export class ProductsComponent {
    
    isAdmin:boolean;
    products:Array<Products>;
    selectedProduct:Products;
    
    constructor(productService:ProductsService) { 
        this.isAdmin = true;
        this.products = productService.getProducts();
    }

    showDetails(product){
        alert(product.description + ' ' + product.name + ' Rs ' + product.price)
    }

    doSearch(searchstr:string){
        var prodNames:string[] = [];
        for (var key in this.products) {
            if (this.products[key].name.toLowerCase().startsWith(searchstr.toLowerCase())) {
                prodNames.push(this.products[key].name);
                
            }
        }
        alert(prodNames);
    }
}
