import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  name:string;
  password:string;
  constructor( private loginService:LoginService) {
    this.name = 'admin';
    this.password = '*****';
   }

   doSomething(uname){
     this.name = uname;
   }

   doLogin(){
      this.loginService.setUsername(this.name);
   }
}
