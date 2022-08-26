import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(
    public player1: Fighter,
    public player2: Fighter,
  ) {
    super(player1);
  }

  fight(): number {
    for (let index = 0; index < 600; index += 1) {
      if (this.player1.lifePoints > 0 && this.player2.lifePoints > 0) {
        this.player1.attack(this.player2);
        this.player2.attack(this.player1);
      }
    }
    const battleResult = super.fight();
    return battleResult;
  }
}
