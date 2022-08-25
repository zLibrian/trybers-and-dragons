import Fighter from '../Fighter';
import getRandomInt from '../utils';
import Battle from './Battle';

export default class PVP extends Battle {
  private _player1: Fighter;
  private _player2: Fighter;

  constructor(player1: Fighter, player2: Fighter) {
    super(player1);
    this._player1 = player1;
    this._player2 = player2; 
  }

  static rollD20(player: Fighter) {
    const d20 = getRandomInt(1, 20);
    return player.dexterity ? d20 * player.dexterity : d20;
  }

  firstToAttack() {
    const player1Speed = PVP.rollD20(this._player1);
    const player2Speed = PVP.rollD20(this._player2);

    while (this._player1.lifePoints > 0 && this._player2.lifePoints > 0) {
      if (player1Speed > player2Speed) {
        this._player1.attack(this._player2);
      } else {
        this._player2.attack(this._player1);
      }
    }
  }

  fight(): number {
    this.firstToAttack();
    if (this._player1.lifePoints < 1) {
      return -1;
    }
    if (this._player2.lifePoints < 1) {
      return 1;
    } 
    return 0;
  }
}
