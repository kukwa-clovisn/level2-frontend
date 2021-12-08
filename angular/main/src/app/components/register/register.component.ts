import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // faArrowRight = faArrowRight;
  name: string = "Kambang Sinclaire";
  password: string = "";
  confirm_password: string = "";
  email: string = "kambang05@gmail.com";
  // router: Router;
  pushed: boolean = false;

  register() {
    if (this.name !== "" && this.email !== "" && this.password !== "" && this.password.length > 5 && this.password.length < 11 && this.password === this.confirm_password) {
      localStorage.setItem("name", this.name);
      localStorage.setItem("email", this.email);
      localStorage.setItem("password", this.password);
      this.pushed = true;
      // this.router.navigate(["/profile"]);
    } else {
      return alert("please fill all input fields");
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
