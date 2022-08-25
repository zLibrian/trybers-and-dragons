import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints: number;
  static _countCreatedRacesInstances = 0;

  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc._countCreatedRacesInstances += 1;
  }

  public static createdRacesInstances(): number {
    return Orc._countCreatedRacesInstances;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}