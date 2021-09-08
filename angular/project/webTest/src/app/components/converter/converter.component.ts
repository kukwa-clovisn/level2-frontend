import { Component, OnInit } from '@angular/core';
import { ConverterService } from 'src/app/services/converter.service';
import { IResponse } from '../response';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {
  public response: any= [];
  currencyName: string = 'USD';
  currencyAmount: number = 0;

  constructor(private convert: ConverterService) { }

  ngOnInit(): void {
       
        this.convert.Converter().subscribe( data => {this.response = data[this.response]},
        error => {
          console.log(error)
        },
        () => {
          console.log("your request is completer")
        });

  }

}
