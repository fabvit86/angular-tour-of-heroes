import { Injectable } from '@angular/core'

import { Hero } from './hero'
import { HEROES } from './mock-heroes'

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> { // stub method
    // HEROS comes from an asynchronous call (mocked), that's why the method returns a Promise:
    return Promise.resolve(HEROES)
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // 2 second latency delay server simulation, resolve the promise after 2 seconds:
      setTimeout(() => resolve(this.getHeroes()), 2000)
    })
  }
}
