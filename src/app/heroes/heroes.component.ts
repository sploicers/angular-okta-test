import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { IHero } from './models/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: IHero[] = [];
  selectedHero?: IHero;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: IHero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero ${hero.id}`);
  }

  getHeroes(): void {
    this.heroService
        .getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}
