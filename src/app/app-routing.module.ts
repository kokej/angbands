import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { FooBarComponent }   from './components/foo-bar/foo-bar.component';
import { BandComponent }     from './components/band/band.component';
import { HomeComponent }     from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'foo', component: FooBarComponent },
  { path: 'bar', component: FooBarComponent },
  { path: 'the-rolling-stones', component: BandComponent },
  { path: 'the-beatles', component: BandComponent },
  { path: 'queen', component: BandComponent },
  { path: '',  component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}