import { Injectable } from '@angular/core'

import { Hero } from './hero'
import { HEROES } from './mock-heroes'

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> { // stub method
    // HEROS comes from an asynchronous call (mocked), that's why the method returns a Promise:
    return Promise.resolve(HEROES)
  }

  // return the Hero with that has given id, filtering the list returned by getHeroes():
  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id))
  }

  // test method:
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // 2 second latency delay server simulation, resolve the promise after 2 seconds:
      setTimeout(() => resolve(this.getHeroes()), 2000)
    })
  }
}
