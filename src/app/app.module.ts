import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ExpenseChartComponent } from './components/expense-chart/expense-chart.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChartPieComponent } from './components/chart-pie/chart-pie.component';
import { ChartBarComponent } from './components/chart-bar/chart-bar.component';
import { NgChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './componets/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ExpenseChartComponent,
    DashboardComponent,
    ChartPieComponent,
    ChartBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
