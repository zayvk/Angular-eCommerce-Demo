import { Component } from '@angular/core';
import { CartService } from './cart/cart.service';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[CartService, LoginService]
})
export class AppComponent {
  title = 'Angular Demo Application';
  name:string;

  constructor(){
    this.name = 'AngularBoy'; 
  }

  updateEventListener(args:any){
    this.name = args;
  }
}
