export class Hero {
  basicHealth = 100;
  basicArmor = 0;
  basicAttackPower = 0;

  health(): number {
    return this.basicHealth;
  }
  armor(): number {
    return this.basicArmor;
  }
  attackPower(): number {
    return this.basicAttackPower;
  }
}


