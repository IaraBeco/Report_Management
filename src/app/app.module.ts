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
import { FooterComponent } from './components/footer/footer.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon'; 
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from './components/header/header.component';
import { TecnicoListComponent } from './components/tecnico/tecnico-list/tecnico-list.component'; 
import { MatPaginatorModule } from '@angular/material/paginator'; 
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ExpenseChartComponent,
    DashboardComponent,
    ChartPieComponent,
    ChartBarComponent,
    FooterComponent,
    HeaderComponent,
    TecnicoListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
