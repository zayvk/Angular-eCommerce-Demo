import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()

export class LoginService {

    subject:Subject<string> = new Subject<string>();

    setUsername(userName:string){
        this.subject.next(userName);  //Notify to the subscribers
    }

    getUserName():Observable<string>{
        return this.subject.asObservable();
    }
}