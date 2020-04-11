import { Component, OnInit } from '@angular/core';

import { Stock } from '../stock'
import { StockService } from '../stock.service'

@Component({
  selector: 'app-stocklist',
  templateUrl: './stocklist.component.html',
  styleUrls: ['./stocklist.component.css']
})
export class StocklistComponent implements OnInit {
  stocks:string[] = [ 'MSFT', 'AAPL', 'FB' ];

  constructor(private stockService: StockService) { }

  ngOnInit() {
    //this.getStocks();
  }

  getStocks():void{
    //this.stockService.getStocks().subscribe(stocks => this.stocks = stocks.slice(0,5));
  }

}