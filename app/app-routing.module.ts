import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PrimaComponent } from './prima/prima.component';
import {DouaComponent } from './doua/doua.component';
import { Reteta1Component } from './reteta1/reteta1.component';
import { Reteta2Component } from './reteta2/reteta2.component';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { RegisterComponent } from './component/register/register.component';
import {Reteta3Component} from'./reteta3/reteta3.component';
import {Reteta4Component} from'./reteta4/reteta4.component';
import {Reteta6Component} from'./reteta6/reteta6.component';
import{Reteta5Component}from './reteta5/reteta5.component';
import {NutritieComponent} from'./nutritie/nutritie.component';
import {ContactComponent} from'./contact/contact.component';


const routes: Routes = [
  {path:'', redirectTo:'prima', pathMatch:"full"},
  {path:"prima", component:PrimaComponent},
  {path:"doua", component:DouaComponent},
  {path:"reteta1", component:Reteta1Component},
  {path:"reteta2", component:Reteta2Component},
  {path:"login", component:LoginComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:"register", component:RegisterComponent},
  {path:"reteta3", component:Reteta3Component},
  {path:"reteta4", component:Reteta4Component},
  {path:"reteta5", component:Reteta5Component},
  {path:"reteta6", component:Reteta6Component},
  {path:"nutritie", component:NutritieComponent},
  {path:"contact", component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
