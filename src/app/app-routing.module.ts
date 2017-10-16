// this module defines the routes
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // routing

import { DashboardComponent } from './dashboard.component'
import { HeroDetailComponent } from './hero-detail.component'
import { HeroesComponent } from './heroes.component'

const routes: Routes = [
  { // redirecting route, redirects from '' to '/dashboard':
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'heroes', // url
    component: HeroesComponent // component that will be created when navigating to this route
  },
  {
    path: 'detail/:id', // url with a variable parameter (id)
    component: HeroDetailComponent
  }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
