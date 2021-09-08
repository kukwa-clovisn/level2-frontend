import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
    firstName = 'Enter fist name...';
  lastName = "Enter last name...";
  emailAddress = "email-address";
  contact = "enter contact";
  male = 'male';
  female = 'female';

    cyber_security: boolean = false;
  digital_marketing: boolean = false;
  fullstack: boolean = false;

  show_cyber_security_form(){
    // swal("success", "dkfdl", "good");
    return this.cyber_security = !this.cyber_security;
  }

   show_digital_marketing_form(){
    // swal("success", "dkfdl", "good");
    return this.digital_marketing = !this.digital_marketing;
  }

   show_fullstack_form(){
    // swal("success", "dkfdl", "good");
    return this.fullstack = !this.fullstack;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
