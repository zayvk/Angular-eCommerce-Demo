import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {
    menuItems:string[];
    constructor() { 
      this.menuItems = ['Login', 'Products', 'My Cart', 'About'];
    }

    getItems():string[]{
        return this.menuItems;
    }
}