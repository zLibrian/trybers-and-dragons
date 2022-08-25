import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  static _countCreatedRacesInstances = 0;

  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf._countCreatedRacesInstances += 1;
  }

  public static createdRacesInstances(): number {
    return Elf._countCreatedRacesInstances;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}