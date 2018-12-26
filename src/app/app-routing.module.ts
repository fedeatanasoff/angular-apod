import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialDemoComponent } from './../app/material/material-demo/material-demo.component';
import { HomeComponent } from './../app/home/home.component';
import { MarsComponent } from './mars/mars.component';
import { ApodComponent } from './apod/apod.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'material-demo',
    component: MaterialDemoComponent
  },
  { path: 'home', component: HomeComponent },
  { path: 'apod', component: ApodComponent },
  { path: 'mars', component: MarsComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
