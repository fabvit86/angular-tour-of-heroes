import { Component } from '@angular/core'
import { Hero } from './hero'
import { HeroService } from './hero.service'
import { OnInit } from '@angular/core'

@Component({
  // id of the html element that will contain the template:
  selector: 'app-root',
  // html of the component:
  template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <hero-detail [hero]="selectedHero"></hero-detail>
    `,
  styles: [`
      .selected {
        background-color: #CFD8DC !important;
        color: white;
      }
      .heroes {
        margin: 0 0 2em 0;
        list-style-type: none;
        padding: 0;
        width: 15em;
      }
      .heroes li {
        cursor: pointer;
        position: relative;
        left: 0;
        background-color: #EEE;
        margin: .5em;
        padding: .3em 0;
        height: 1.6em;
        border-radius: 4px;
      }
      .heroes li.selected:hover {
        background-color: #BBD8DC !important;
        color: white;
      }
      .heroes li:hover {
        color: #607D8B;
        background-color: #DDD;
        left: .1em;
      }
      .heroes .text {
        position: relative;
        top: -3px;
      }
      .heroes .badge {
        display: inline-block;
        font-size: small;
        color: white;
        padding: 0.8em 0.7em 0 0.7em;
        background-color: #607D8B;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -4px;
        height: 1.8em;
        margin-right: .8em;
        border-radius: 4px 0 0 4px;
      }
  `],
  // The providers array tells Angular to create a fresh instance of the HeroService when it creates this component:
  providers: [HeroService]
})
export class AppComponent implements OnInit{
  // component properties:
  title = 'Tour of Heroes'
  heroes: Hero[]
  selectedHero: Hero // specify that selectedHero is an instance of the Hero class

  constructor(private heroService: HeroService) { }
  
  // get the array of heros from calling getHeroes() on the istance of HeroService service:
  getHeroes(): void { 
    this.heroes = this.heroService.getHeroes()
  }

  // everything inside ngOnInit will be called when the component is initialized:
  ngOnInit(): void {
    this.getHeroes()
  }

  // hero click handler:
  onSelect(hero: Hero): void {
    this.selectedHero = hero
  }
}
