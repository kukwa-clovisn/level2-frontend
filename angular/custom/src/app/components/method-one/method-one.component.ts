import { Component, OnDestroy, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-method-one',
  templateUrl: './method-one.component.html',
  styleUrls: ['./method-one.component.scss']
})
export class MethodOneComponent implements OnInit, OnDestroy, OnChanges {
  // checked: boolean = false;
  // counter: number = 0; 
  // timer: any;
  paragraph: string = '';


  constructor() {
   console.log("method one constructor")
   // this.count = count;
 }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    console.log("method one onint")

  // this.timer =  setInterval(() => {
  //   this.counter = this.counter + 1;
  //   console.log(this.counter);
  //  }, 1000);
  }

  OnChanges() {
    console.log('the method one or child has changed');
  }


  ngOnDestroy() {
    console.log("calling the method one OnDestroy");
    // clearTimeout(this.timer);
  }


}
