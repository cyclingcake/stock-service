import { Component, OnInit, ViewChild } from "@angular/core";
import { ChartDataSets, ChartOptions } from "chart.js";
import { Color, Label } from "ng2-charts";
import { ActivatedRoute } from "@angular/router";

import { StockService } from "../stock.service";
import { Stock } from "../stock";

@Component({
  selector: "app-stockchart",
  templateUrl: "./stockchart.component.html",
  styleUrls: ["./stockchart.component.css"]
})
export class StockchartComponent implements OnInit {
  public lineChartData: ChartDataSets[];

  public lineChartLabels: Label[] = ["January", "February", "March"];
  public lineChartOptions: ChartOptions & { annotation: any } = {
    responsive: true
  };
  public lineChartColors: Color[] = [
    {
      borderColor: "black",
      backgroundColor: "rgba(100,150,0,0.3)"
    }
  ];
  public lineChartLegend = true;
  public lineChartType = "line";
  public lineChartPlugins = [];

  stock: Stock;

  constructor(
    private stockService: StockService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let id = params.get("id");
      if (id != null) {
        this.stockService.getStockById(id).subscribe(x => {
          this.stock = x;
          this.lineChartData = [
            { data: this.stock.price, label: this.stock.ticker }
          ];
        });
      }
    });
  }
}
