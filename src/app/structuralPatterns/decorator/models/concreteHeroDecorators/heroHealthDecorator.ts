import { Hero } from '../hero.model';
import { HeroComponentDecorator } from '../heroComponentDecorator';
export class HeroHealthDecorator extends HeroComponentDecorator {
  constructor(hero: Hero) {
    super(hero);
  }
  health(): number {
    return this.basicHealth + 15;
  }
}
