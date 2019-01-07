import { Hero } from '../hero.model';
export class AttackingHero extends Hero {
  basicHealth = 75;
  basicArmor = 15;
  basicAttackPower = 30;

  health(): number {
    return 75;
  }
  armor(): number {
    return 15;
  }
  attackPower(): number {
    return 30;
  }
}
