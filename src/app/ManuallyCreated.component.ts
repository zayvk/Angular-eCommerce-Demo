import { Component } from '@angular/core';

@Component({
    selector: 'manual',
    template: `
            <div>
                <h2>Welcome to {{title}}!!</h2>
            </div>
    `
})
export class ManualComponent{

    title:string;
    constructor() {
        this.title = 'Angular Demo';
     }
}
