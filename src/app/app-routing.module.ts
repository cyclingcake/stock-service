import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StockinfoComponent } from './stockinfo/stockinfo.component';
import { StockchartComponent } from './stockchart/stockchart.component';
import { StocklistComponent } from './stocklist/stocklist.component';
import { AppComponent } from './app.component';

const routes: Routes = [
        { path: '', component: StockchartComponent },
      { path: 'stocks/:id', component: StockinfoComponent }
  //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  //{ path: 'dashboard', component: DashboardComponent },
  //{ path: 'detail/:id', component: HeroDetailComponent },
  //{ path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}