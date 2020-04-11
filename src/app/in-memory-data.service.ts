import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";

import { Stock } from "./stock";

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const stocks = [
      { id: 11, name: "Microsoft", ticker:"MSFT", price:[100,120,110] },
      { id: 12, name: "Facebook", ticker:"FB", price:[50,60,100] },
      { id: 13, name: "Google", ticker:"GOOGL", price:[80,80,50] },
      { id: 14, name: "Apple", ticker:"AAPL", price:[100,80,110] },
    ];
    return { stocks };
  }

  genId(stocks: Stock[]): number {
    return stocks.length > 0 ? Math.max(...stocks.map(stock => stock.id)) + 1 : 11;
  }
}
