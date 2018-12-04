import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

  productName:string;
  today:Date;
  price:number;
  toggle:boolean;

  constructor() { 
    this.productName = 'ABC Handset';
    this.today = new Date();
    this.price = 255.56;
    this.toggle = false;
  }

  ngOnInit() {
  }

  get format(){
    return this.toggle?'shortDate':'longDate';
  }

}
