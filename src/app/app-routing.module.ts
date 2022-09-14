import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./components/home/home.component"
import { LoginComponent } from "./components/login/login.component"
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatListModule } from '@angular/material/list';
import { TecnicoListComponent } from './components/tecnico/tecnico-list/tecnico-list.component';



const routes: Routes = [
//   {path: '', component: NavbarComponent, children:[
//     {path: 'home', component: HomeComponent},
//     {path:'tecnicos', component: TecnicoListComponent}
//   ] 
// },
   {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent },
  {path: 'cadastro', component:  CadastroComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '**', redirectTo:'/'},
 
];

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
 