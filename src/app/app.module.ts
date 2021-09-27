import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ListVraboteniComponent } from './list-vraboteni/list-vraboteni.component';
import { MenuComponent } from './menu/menu.component';
import { AddVrabotenComponent } from './add-vraboten/add-vraboten.component';
import { FormsModule } from '@angular/forms';
import { AddOddelComponent } from './add-oddel/add-oddel.component';
import { ListOtsustvaComponent } from './list-otsustva/list-otsustva.component';
import { AddOtsustvoComponent } from './add-otsustvo/add-otsustvo.component';


@NgModule({
  declarations: [
    AppComponent,
    ListVraboteniComponent,
    MenuComponent,
    AddVrabotenComponent,
    AddOddelComponent,
    ListOtsustvaComponent,
    AddOtsustvoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
