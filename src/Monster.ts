import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  protected _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }
  
  receiveDamage(attackPoints: number): number {
    const damage = attackPoints;
    if (damage > 0) this._lifePoints -= damage;
    if (damage >= this._lifePoints) this._lifePoints = -1;
    return this._lifePoints;
  }
  
  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  public get strength(): number {
    return this._strength;
  }
}