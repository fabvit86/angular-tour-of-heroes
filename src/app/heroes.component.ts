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
  heroes: Hero[] // current list of heroes for the view
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

  // add a new hero, using the hero service create() method:
  add(name: String): void {
    name = name.trim()
    if (!name) return
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero) // add the hero to the array of heroes
        this.selectedHero = null // de-select selected hero
      })
  }

  // delete a hero, using the hero service delete() method:
  delete(hero: Hero):void {
    this.heroService.delete(hero.id)
      .then(() => {
        // delete the hero from the array of heroes, recreating an array that does not contain it:
        this.heroes = this.heroes.filter(currentHero => currentHero !== hero)
        // if the hero to delete is selected, de-select it:
        if (this.selectedHero === hero) this.selectedHero = null
      })
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
