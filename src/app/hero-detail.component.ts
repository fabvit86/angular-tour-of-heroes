// component to show a hero's details
import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute, ParamMap } from '@angular/router'
import { Location }                 from '@angular/common'

import 'rxjs/add/operator/switchMap'

import { Hero }        from './hero'
import { HeroService } from './hero.service'

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})

export class HeroDetailComponent implements OnInit {
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute, // service that has the parameters of 
    private location: Location
  ) {}

  hero: Hero

  // take the id parameter from the paramMap Observable in the ActivatedRoute service and use the HeroService to fetch the hero with that id:
  ngOnInit(): void {
    // paramMap is used to extract the id parameter value from the ActivatedRoute service.
    // switchMap  maps the id in the Observable (paramMap) route parameters to a new Observable (the result of HeroService.getHero()).
    // If a user re-navigates to this component while a getHero request is still processing, switchMap cancels the old request and then calls HeroService.getHero() again.
    // the + operator convert the id from string to number.
    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
      .subscribe(hero => this.hero = hero)
  }

  // method that navigates backward one step in the browser's history stack using the Location service:
  goBack(): void {
    this.location.back();
  }

  // update an hero's details using the update() method from the hero service:
  save(): void {
    this.heroService.update(this.hero)
      .then(() => this.goBack()) // go back after the update
  }

  // dichiarando input, la propietà è public e un component parent può farci binding:
  // @Input() hero: Hero
}
