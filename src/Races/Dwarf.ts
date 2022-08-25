import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  static _countCreatedRacesInstances = 0;
  
  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf._countCreatedRacesInstances += 1; 
  }

  public static createdRacesInstances():number {
    return Dwarf._countCreatedRacesInstances;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}