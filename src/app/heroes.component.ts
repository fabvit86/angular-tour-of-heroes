import { Component } from '@angular/core'
import { Hero } from './hero'
import { HeroService } from './hero.service'
import { OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  // id of the html element that will contain the template:
  selector: 'my-heroes',
  // html of the component:
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.css' ]
})
export class HeroesComponent implements OnInit{
  // component properties:
  heroes: Hero[]
  selectedHero: Hero // specify that selectedHero is an instance of the Hero class

  constructor(
    private router: Router, // used in the gotoDetail() method
    private heroService: HeroService
  ) { }
  
  // get the array of heros from calling getHeroes() on the istance of HeroService service:
  getHeroes(): void { 
    // heroService.getHeroes() returns a Promise. When it resolves, the callback assign the heroes array to this.heroes:
    this.heroService.getHeroes().then(heroes => this.heroes = heroes)
  }

  // everything inside ngOnInit will be called when the component is initialized:
  ngOnInit(): void {
    this.getHeroes() // call the internal getHeroes() method
  }

  // hero click handler:
  onSelect(hero: Hero): void {
    this.selectedHero = hero
  }

  // go to hero details:
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id])
  }
}
