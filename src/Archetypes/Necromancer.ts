import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  public static _countCreatedArchetypeInstances = 0;
  private _energyType: EnergyType;
  
  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer._countCreatedArchetypeInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    return Necromancer._countCreatedArchetypeInstances;
  }
}