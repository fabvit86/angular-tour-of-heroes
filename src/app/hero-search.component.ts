import { Component, OnInit } from '@angular/core'
import { Router }            from '@angular/router'
 
import { Observable }        from 'rxjs/Observable'
import { Subject }           from 'rxjs/Subject'
 
// Observable class extensions
import 'rxjs/add/observable/of'
 
// Observable operators
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'
 
import { HeroSearchService } from './hero-search.service'
import { Hero } from './hero'
 
@Component({
  selector: 'hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: [ './hero-search.component.css' ],
  providers: [HeroSearchService]
})
export class HeroSearchComponent implements OnInit {
  heroes: Observable<Hero[]>
  // A Subject is a producer of an observable event stream; searchTerms produces an Observable of strings:
  private searchTerms = new Subject<string>()
 
  constructor(
    private heroSearchService: HeroSearchService,
    private router: Router) {}
 
  // Push a search term into the observable stream 'searchTerms':
  search(term: string): void { // called every time the user types in the search box
    this.searchTerms.next(term)
  }
 
  ngOnInit(): void {
    // turn the stream of search terms into a stream of Hero arrays and assign the result to the heroes property:
    this.heroes = this.searchTerms
      /* to avoid passing every user keystroke directly to the HeroSearchService (to many http request),
        chain Observable operators that reduce the request flow to the string Observable,
        waiting 300ms after each keystroke before passing along the latest string
      */
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable:
        ? this.heroSearchService.search(term)
        // or the observable of empty heroes if there was no search term:
        : Observable.of<Hero[]>([]))
      // intercept failed Observable:
      .catch(error => {
        // TODO: add real error handling
        console.log(error)
        return Observable.of<Hero[]>([]) // observable containing an empty array to clear search results
      })
  }
 
  gotoDetail(hero: Hero): void {
    let link = ['/detail', hero.id]
    this.router.navigate(link)
  }
}
