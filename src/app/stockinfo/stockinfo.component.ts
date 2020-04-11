import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { StockService } from '../stock.service'
import { Stock } from '../stock';

@Component({
  selector: 'app-stockinfo',
  templateUrl: './stockinfo.component.html',
  styleUrls: ['./stockinfo.component.css']
})
export class StockinfoComponent implements OnInit {
  stock:Stock;

  constructor(
    private stockService: StockService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params =>
        { this.stockService.getStockPrice(params.get('id')).subscribe( x => this.stock = x)}
    )
  }

}