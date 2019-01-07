import { Component, OnInit } from '@angular/core';
import { Hero } from './models/hero.model';
import { AttackingHero } from './models/concreteHeroComponent/attackingHero';
import { DefendingHero } from './models/concreteHeroComponent/defendingHero';
import { HeroAttackPowerDecorator } from './models/concreteHeroDecorators/heroAttackPowerDecorator';
import { HeroHealthDecorator } from './models/concreteHeroDecorators/heroHealthDecorator';

@Component({
  selector: 'app-decorator',
  templateUrl: './decorator.component.html',
  styleUrls: ['./decorator.component.css']
})
export class DecoratorComponent implements OnInit {

  attackHero: Hero;
  defenceHero: Hero;

  displayHero: string;
  constructor() { }

  ngOnInit() {
    this.attackHero = new AttackingHero();
    this.attackHero = new HeroAttackPowerDecorator(this.attackHero);
  }

}
