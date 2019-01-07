import { Hero } from '../hero.model';
import { HeroComponentDecorator } from '../heroComponentDecorator';

export class HeroArmorDecorator extends HeroComponentDecorator {
  constructor(hero: Hero) {
    super(hero);
  }
  armor(): number {
    return this.basicArmor + 15;
  }
}
