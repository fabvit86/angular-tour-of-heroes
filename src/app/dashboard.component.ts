// dashboard that shows 4 heroes
import { Component, OnInit } from '@angular/core'

import { Hero } from './hero'
import { HeroService } from './hero.service'

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html', // reference to an html template contained another file
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {
  heroes: Hero[] = [] // initiate the heroes to an empty array

  // use of the hero service (injecting it in a private variable) to retrieve the list of heroes:
  constructor(private heroService: HeroService) { }

  // get the list of heroes and assign the heroes 2, 3, 4 and 5 to the internal heroes property:
  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5))
  }
}
