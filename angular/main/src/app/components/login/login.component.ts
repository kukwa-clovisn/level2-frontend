import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  name:string = "";
  password: string = "";

  log_in() {
    console.log("hey");
    localStorage.setItem("firstname", this.name);
       localStorage.setItem("password", this.password);
       this.router.navigate(["/register"]);
  }
    constructor(private router: Router) {

   }

  ngOnInit(): void {
  }

}
