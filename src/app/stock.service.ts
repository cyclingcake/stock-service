import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Stock } from './stock';
//import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class StockService {

  //private baseUrl = 'api/stocks'
  private baseUrl = 'https://sandbox.iexapis.com/stable';
  private token = 'token=Tpk_9d95c2d339d24ec19bb753d0502142bb';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }

  constructor(
    private http: HttpClient,
  ) { }

  getStockPrice(ticker:string) : Observable<Stock>{ 
    const url = `${this.baseUrl}/stock/${ticker}/quote?${this.token}`;
    console.warn(url);
    return this.http.get<Stock>(url);
  }
}