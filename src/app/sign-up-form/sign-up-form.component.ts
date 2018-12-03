import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  user = {
    name:'Jay',
    phone:9999999999,
    address:'Hinjewadi',
    email:'jay@persistent.com'
  }

  constructor() { }

  ngOnInit() {
  }

  postForm(){
    alert("Form Submitted");
  }

}
