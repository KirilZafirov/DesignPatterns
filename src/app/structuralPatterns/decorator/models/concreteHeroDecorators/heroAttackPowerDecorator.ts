import { Hero } from '../hero.model';
import { HeroComponentDecorator } from '../heroComponentDecorator';
export class HeroAttackPowerDecorator extends HeroComponentDecorator {
  constructor(hero: Hero) {
    super(hero);
  }
  attackPower(): number {
    return this.basicAttackPower + 15;
  }
}
