import { Component, OnInit } from '@angular/core';

 const users = [
  {
    name: "Kambang",
    age: 44,
    level: "one"
  },
   {
    name: "Sinclaire",
    age: 33,
    level: "two"
  },
   {
    name: "Prince",
    age: 55,
    level: "three"
  },
  {
    name: "clovis",
    age: 44,
    level: "two"
  }
  ]


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  USERS: any = [];
  constructor() { }

  ngOnInit(): void {
    this.USERS = users;
  }

}
