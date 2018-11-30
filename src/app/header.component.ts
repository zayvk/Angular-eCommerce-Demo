import { Component } from '@angular/core';
import { LoginService } from './login/login.service';
import { SessionStorage } from 'angular-web-storage';

@Component({
    selector: 'app-header',
    template: `
            <h2> Welcome {{username}}</h2>
    `

})
export class HeaderComponent  {

    @SessionStorage()
    username:string;
    constructor(private loginService:LoginService) {

        loginService.getUserName().subscribe(newName => this.username = newName);
     }

}
