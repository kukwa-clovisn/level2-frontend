import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
// import { MethodOneComponent } from './method-one.component';

@Component({
  selector: 'app-method-two',
  templateUrl: './method-two.component.html',
  styleUrls: ['./method-two.component.scss']
})
export class MethodTwoComponent implements OnInit, OnChanges {
  checked: boolean = true;
  toggleBox() {
    console.log('it works')
    this.checked = !this.checked;
  }

  constructor() { console.log("method two")}

  ngOnInit(): void {
    console.log("method two oninit")
  }

  ngOnChanges() {
    console.log("the method two or parent has been changed");
  }

}
