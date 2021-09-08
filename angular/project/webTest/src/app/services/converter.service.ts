import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConverterComponent } from '../components/converter/converter.component';
import { Observable, observable } from 'rxjs';
import { IResponse } from '../components/response';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {
  url = 'https://fastforex.readme.io/reference/get_convert';

  constructor(private http: HttpClient) {}
  
  Converter() : Observable<IResponse[]>{
    return this.http.get<IResponse[]>(this.url);
   }
}
