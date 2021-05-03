import { Injectable } from '@angular/core';
import { IHero } from './heroes/models/hero';
import { Heroes } from './heroes/models/hero-list';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<IHero[]> {
    const heroes = of(Heroes);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
