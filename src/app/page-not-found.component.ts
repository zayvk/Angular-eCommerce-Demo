import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pagenotfound',
    template: `
    <img src="./assets/images/error-404.png" alt="">
    
    `
})
export class PageNotFoundComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
