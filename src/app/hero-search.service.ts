// hero search using Observables
import { Http } from '@angular/http'
import { Injectable } from '@angular/core'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
 
import { Hero } from './hero'

@Injectable()
export class HeroSearchService {
  constructor(private http: Http) { }

  // search the hero name based on the string input by the user:
  search(term: string): Observable<Hero[]> {
    return this.http.get(`api/heroes/?name=${term}`) // pass 'term' as a query string property
      .map(response => response.json() as Hero[]) // chaining to the response data
  }
}
