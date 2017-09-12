import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms' // ngModel
import { RouterModule } from '@angular/router' // routing

import { AppComponent } from './app.component'
import { DashboardComponent } from './dashboard.component'
import { HeroDetailComponent } from './hero-detail.component'
import { HeroesComponent } from './heroes.component'

import { HeroService } from './hero.service'

@NgModule({
  // list of application components, pipes, and directives that belong to the module:
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent
  ],
  // list of the external modules imported and used by the app:
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
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
    ])
  ],
  // The providers array tells Angular to create a fresh instance of the HeroService when it creates a component:
  providers: [HeroService],
  bootstrap: [AppComponent]
})

export class AppModule { }
