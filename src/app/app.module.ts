import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ngModel

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';

@NgModule({
  // list of application components, pipes, and directives that belong to the module:
  declarations: [
    AppComponent,
    HeroDetailComponent
  ],
  // list of the external modules imported and used by the app:
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
