import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstname: ['Abhijeet', Validators.required],
      lastname: [null,
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20)
        ])],
      address: this.fb.group({
        city: [null, Validators.required],
        zip: [null,
          Validators.compose([
            Validators.required,
            Validators.pattern("^[0-9]{5}(?:-[0-9]{4})?$")]
          )]
      }),
      emailAddr: [null, Validators.compose([
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*"),
        this.emailDomainValidator
      ])]
    })
  }

  emailDomainValidator(control:FormControl){
    let email = control.value;
    if(email && email.indexOf('@') != -1){
      let [_,domain]= email.split('@');
      if(domain !== 'persistent.com'){
        return {
          emailDomain:{
            parseDomain:domain
          }
        }
      }
    }
    return null;
  }

}
