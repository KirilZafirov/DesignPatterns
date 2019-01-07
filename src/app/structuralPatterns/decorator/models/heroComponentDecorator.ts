import { Hero } from './hero.model';
export class HeroComponentDecorator extends Hero {

  constructor(private _hero: Hero) {
    super();
  }
  health(): number {
    return this._hero.health();
  }
  armor(): number {
    return this._hero.armor();
  }
  attackPower(): number {
    return this._hero.attackPower();
  }
}
