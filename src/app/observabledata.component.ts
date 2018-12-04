import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import  "rxjs/add/observable/interval";
import  "rxjs/add/operator/take";
import  "rxjs/add/operator/map";

@Component({
    selector: 'asyncpipe',
    template: `
            <div class='card card-block'>
                <h2>Async Pipe Demo</h2>
                <p class='card-text' ngNonBindable> {{observable}}</p>
                <p class='card-text'>{{observable | async}}</p>
            </div>
    `
})
export class ObservableDataComponent {

    observable: Observable<number>;

    subscription:any = null;
    constructor() { 
        this.observable = this.GetObservable();
    }

    GetObservable(){
        return Observable.interval(1000).take(10).map(v => v*v)
    }

    // subscribeObservable(){
    //     this.subscription = this.GetObservable().subscribe(v => this.observable = v);
    // }

    // ngDestroy() {
    //     if (this.subscription) {
    //         this.subscription.unsubscribe();
    //     }
        
    //}
}
