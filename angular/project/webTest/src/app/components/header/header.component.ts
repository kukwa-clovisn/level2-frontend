import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public name = "header component"
  sentence = ''
  status: boolean = false;
  lists: any[] = []
  getData = localStorage.getItem('angualr-server')
  constructor() { }

  done() {
    if (this.sentence == '') {
      console.log(console.error())
    } else {
      if (this.getData == null) {
        this.lists = []
      } else {
        this.lists = JSON.parse('angular-server')
        console.log(this.lists)
      }

      this.lists.push(this.sentence)
      localStorage.setItem('angular-server', JSON.stringify(this.lists))
      this.sentence = ''
      console.log(this.lists)
      this.newdata()
    }


  }

  newdata() {
    let data = localStorage.getItem('angular-server')
    console.log(data)
  }

  ngOnInit(): void {
    this.done()
  }

  ngOnChanges() {
    console.log(this.sentence)
  }

}
