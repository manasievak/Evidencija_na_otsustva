import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOddelComponent } from './add-oddel/add-oddel.component';
import { AddVrabotenComponent } from './add-vraboten/add-vraboten.component';
import { ListVraboteniComponent } from './list-vraboteni/list-vraboteni.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
  { path: 'list', component: ListVraboteniComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'add', component: AddVrabotenComponent },
  { path: 'addOddel', component: AddOddelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
