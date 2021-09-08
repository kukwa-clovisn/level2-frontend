import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  name:string = "";
  password: string = "";

  log_in() {
    console.log("hey");
    localStorage.setItem("firstname", this.name);
       localStorage.setItem("password", this.password);
       this.router.navigate(["/register"]);
  }

  // constructor() { }

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

}
// validate user input fields 5 < input.length <= 10 should be of type string
// set to storage
// in profile component , create profile user profile card, display the username/email ie user info from log in
