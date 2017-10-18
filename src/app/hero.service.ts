import { Headers, Http } from '@angular/http'
import { Injectable } from '@angular/core'

import 'rxjs/add/operator/toPromise' // operator that transorm Observables into Promises

import { Hero } from './hero'

@Injectable()
export class HeroService {
  private headers = new Headers({'Content-Type': 'application/json'})
  private heroesUrl = 'api/heroes'

  constructor(private http: Http) { }

  // HEROS comes from an asynchronous call (mocked API):
  getHeroes(): Promise<Hero[]> { // stub method
    // make the get call:
    return this.http.get(this.heroesUrl)
      // transform the response (which is an Observable) into a Promise:
      .toPromise()
       // grab the json response and use it for the resolved Promise value:
      .then(response => response.json() as Hero[])
      // handle HTTP failures errors:
      .catch(this.handleError)
  }

  // return the Hero that has given id, calling api/heroes/:id:
  getHero(id: number): Promise<Hero> {
    const heroUrl = `${this.heroesUrl}/${id}`
    return this.http.get(heroUrl)
      .toPromise()
      .then(response => response.json() as Hero)
      .catch(this.handleError)
    // return this.getHeroes()
    //   .then(heroes => heroes.find(hero => hero.id === id))
  }

  // update an hero using http put:
  update(hero: Hero): Promise<Hero> {
    const heroUrl = `${this.heroesUrl}/${hero.id}`
    return this.http.put(heroUrl, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError)
  }

  // method to handle errors:
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error)
    return Promise.reject(error.message || error)
  }

  // TEST method:
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // 2 second latency delay server simulation, resolve the promise after 2 seconds:
      setTimeout(() => resolve(this.getHeroes()), 2000)
    })
  }
}
