export class Hero {
    heroId: number;
    toughness: number;
    strength: number;
    luggage : Array<string>;
    gold: number;

    constructor(heroId: number, toughness: number, strength: number, luggage: Array<string>, gold: number) {
      this.heroId = heroId;
      this.toughness = toughness;
      this.strength = strength;
      this.luggage = luggage;
      this.gold = gold;
    }
  }