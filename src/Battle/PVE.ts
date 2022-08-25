import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  private _player: Character | Fighter;
  private _monsters: Array<Monster | Fighter | SimpleFighter>;

  constructor(
    player: Character | Fighter,
    monsters: Array<Monster | Fighter | SimpleFighter>,
  ) {
    super(player);
    this._player = player;
    this._monsters = monsters;
  }

  checkMonstersLifePoints() {
    const someAlive = this._monsters.some((monster) => monster.lifePoints > 0);
    return someAlive;
  }

  fight(): number {
    while (this._player.lifePoints > 0 && this.checkMonstersLifePoints()) {
      this._monsters.forEach((monster) => {
        this._player.attack(monster);
        monster.attack(this._player);
      });
    }
    if (this._player.lifePoints < 1) return -1;
    if (!this.checkMonstersLifePoints()) return 1;
    return 0;
  }
}