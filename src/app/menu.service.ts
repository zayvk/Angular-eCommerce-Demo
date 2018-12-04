import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {
    menuItems:string[];
    constructor() { 
      this.menuItems = ['Login', 'Register', 'Products', 'My Cart', 'Profile', 'Photos', 'ReactiveForm', 'PipeDemo'];
    }

    getItems():string[]{
        return this.menuItems;
    }
}