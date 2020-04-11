import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'

import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'
import { StockService } from './stock.service';
import { StockinfoComponent } from './stockinfo/stockinfo.component';
import { StockchartComponent } from './stockchart/stockchart.component';
import { StocklistComponent } from './stocklist/stocklist.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    //HttpClientInMemoryWebApiModule.forRoot(
    //  InMemoryDataService, { dataEncapsulation: false }
   // ),
    AppRoutingModule,
    ChartsModule,
  ],
  declarations: [ AppComponent, StockinfoComponent, StockchartComponent, StocklistComponent ],
  bootstrap:    [ AppComponent ],
  providers: [InMemoryDataService, StockService],
})
export class AppModule { }
