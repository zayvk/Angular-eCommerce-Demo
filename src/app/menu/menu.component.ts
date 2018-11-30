import { Component } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [MenuService] //registering MenuService with Angular DI at component
})
export class MenuComponent {

  menuItems:string[];
  constructor(menuService:MenuService) { 
    //this.menuItems = ['Login', 'Products', 'My Cart', 'About'];
      this.menuItems = menuService.getItems();
  }

}
