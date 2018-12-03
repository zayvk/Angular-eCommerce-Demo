import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  name:string;
  password:string;
  constructor( private loginService:LoginService, private router:Router) {
    this.name = 'admin';
    this.password = '*****';
   }

   doSomething(uname){
     this.name = uname;
   }

   doLogin(){
      this.loginService.setUsername(this.name);
      this.router.navigate(['./products'])
   }
}
