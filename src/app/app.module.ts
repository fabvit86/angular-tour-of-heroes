// main app module that establish key facts about the entire app for the Angular compiler
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms' // ngModel

import { AppComponent } from './app.component'
import { DashboardComponent } from './dashboard.component'
import { HeroDetailComponent } from './hero-detail.component'
import { HeroesComponent } from './heroes.component'
import { HeroService } from './hero.service'

import { AppRoutingModule } from './app-routing.module'

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
    AppRoutingModule
  ],
  // The providers array tells Angular to create a fresh instance of the HeroService when it creates a component:
  providers: [HeroService],
  bootstrap: [AppComponent]
})

export class AppModule { }
