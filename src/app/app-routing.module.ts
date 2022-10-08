import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "../app/about/about.component";
import {HomeComponent} from "../app/home/home.component";
import { ItemsComponent } from './items/items.component';
import { WebdesignerComponent } from './webdesigner/webdesigner.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"about", component: AboutComponent},
  {path:"items", component: ItemsComponent},
  {path:"webdesigner", component: WebdesignerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
