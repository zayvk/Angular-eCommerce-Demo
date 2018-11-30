import { Component } from '@angular/core';

@Component({
    selector: 'test-component',
    template: `
            <div><h2>{{name}}</h2></div>
    `
})
export class TestComponent {
    constructor() { }

    name:string = 'Test module for testing separate module'
}
