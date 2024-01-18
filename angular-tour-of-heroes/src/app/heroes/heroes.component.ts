import {Component} from '@angular/core';
// import { NgIf, NgFor, UpperCasePipe } from '@angular/common';
// import {FormsModule} from '@angular/forms';

import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  // standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  // imports: [
  //   FormsModule,
  //   NgIf,
  //   NgFor,
  //   UpperCasePipe,
  // ],
})

export class HeroesComponent {
  heroes: Hero[] = [];
  selectedHero?: Hero;


  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }
  
  onSelected(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
}