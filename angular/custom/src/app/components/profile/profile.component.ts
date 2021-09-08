import { Component, OnInit } from '@angular/core';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
// import { RegisterComponent } from './components/register/register.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  faUserAlt = faUserAlt;
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  faArrowDown = faArrowDown;
  faFile = faFile;
  name : string = "Mr Kambang Sinclaire";
  email: string = "kambang05@gmail.com";
  constructor() { }

  ngOnInit(): void {
  }

}
