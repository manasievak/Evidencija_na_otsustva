import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOddelComponent } from './add-oddel/add-oddel.component';
import { AddOtsustvoComponent } from './add-otsustvo/add-otsustvo.component';
import { AddVrabotenComponent } from './add-vraboten/add-vraboten.component';
import { ListOtsustvaComponent } from './list-otsustva/list-otsustva.component';
import { ListVraboteniComponent } from './list-vraboteni/list-vraboteni.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
  { path: 'list', component: ListVraboteniComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'add', component: AddVrabotenComponent },
  { path: 'addOddel', component: AddOddelComponent },
  { path: 'listOtsustva', component: ListOtsustvaComponent },
  { path: 'addOtsustvo', component: AddOtsustvoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
