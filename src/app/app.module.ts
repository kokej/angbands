import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';
import { BandService } from './services/band.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooBarComponent } from './components/foo-bar/foo-bar.component';
import { BandComponent } from './components/band/band.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    FooBarComponent,
    BandComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpModule,
    JsonpModule
  ],
  providers: [BandService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
