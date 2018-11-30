import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-profile',
    template: `
                <h1>Profile Component</h1>
                <input type='text' [(ngModel)]='profileName'/>
                <button (click)='updateName'>Update</button><br><br>
                <h2>Profile Name - {{profileName}}</h2>
    `
})
export class ProfileComponent {

    @Input()
    profileName:string;

    @Output()
    update:EventEmitter<string> = new EventEmitter<string>();

    constructor() {
        this.profileName = 'Jay';

     }

     updateName(){
         //raising the update event of ProfileComponent
         this.update.emit(this.profileName);
     }
}
