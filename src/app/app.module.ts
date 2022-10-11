import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { AddlistComponent } from './addlist/addlist.component';
import { NavbarComponent } from './navbar/navbar.component';
import {HttpClientModule } from '@angular/common/http'
const appRoutes: Routes=[
  {path:"",component:AddlistComponent}

]


@NgModule({
  declarations: [
    AppComponent,
    AddlistComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
