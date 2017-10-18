// main app module that establish key facts about the entire app for the Angular compiler
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms' // ngModel
import { HttpModule } from '@angular/http' // providers of http services, useful for API calls

import { AppComponent } from './app.component'
import { DashboardComponent } from './dashboard.component'
import { HeroDetailComponent } from './hero-detail.component'
import { HeroesComponent } from './heroes.component'
import { HeroSearchComponent } from './hero-search.component'
import { HeroService } from './hero.service'

import { AppRoutingModule } from './app-routing.module'

// Imports for loading & configuring the in-memory web api (mock service):
import { InMemoryWebApiModule } from 'angular-in-memory-web-api'
import { InMemoryDataService }  from './in-memory-data.service'

@NgModule({
  // list of application components, pipes, and directives that belong to the module:
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent
  ],
  // list of the external modules imported and used by the app:
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService), // simulates communication with a remote server
    AppRoutingModule
  ],
  // The providers array tells Angular to create a fresh instance of the HeroService when it creates a component:
  providers: [HeroService],
  bootstrap: [AppComponent]
})

export class AppModule { }
