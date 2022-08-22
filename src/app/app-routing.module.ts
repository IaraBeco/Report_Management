import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./components/home/home.component"
import { LoginComponent } from "./components/login/login.component"
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ExpenseChartComponent } from './components/expense-chart/expense-chart.component';


const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'login', component: LoginComponent },
  {path: 'cadastro', component:  CadastroComponent},
  {path: 'chart', component: ExpenseChartComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '**', redirectTo:'/'},
 
];

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
 