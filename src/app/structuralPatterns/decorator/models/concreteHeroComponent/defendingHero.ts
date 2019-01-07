import { Hero } from '../hero.model';
export class DefendingHero extends Hero {

  health(): number {
    return 125;
  }
  armor(): number {
    return 45;
  }
  attackPower(): number {
    debugger;
    return 5;
  }
}
