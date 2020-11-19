import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../app/home/home.component'
import {ContactListComponent} from '../app/contact-list/contact-list.component'
import {ContactCreateComponent} from '../app/contact-create/contact-create.component'

const routes: Routes = [
  {path:'', pathMatch:"full", redirectTo: "home"},
  {path:'home',component: HomeComponent},
  {path:'contact-create',component: ContactCreateComponent},
  {path:'contact-list',component: ContactListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
