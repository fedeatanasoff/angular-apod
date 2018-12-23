import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialDemoComponent } from './../app/material/material-demo/material-demo.component';
import { HomeComponent } from './../app/home/home.component';
import { MarsComponent } from './mars/mars.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'material-demo',
    component: MaterialDemoComponent
  },
  { path: 'home', component: HomeComponent },
  { path: 'mars', component: MarsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
