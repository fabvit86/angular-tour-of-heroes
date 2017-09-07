// component to show a hero's details
import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name">
      </div>
    </div>
    `
})

export class HeroDetailComponent {
    // dichiarando input, la propietà è public e un component parent può farci binding:
    @Input() hero: Hero
}
