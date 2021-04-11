import { Hero } from "./Hero";

export class Engine {
    engineId: number;

    constructor(engineId: number) {
      this.engineId = engineId;
    }
    
    describeHero(hero: Hero){
        // describe Hero - toughness, strength, luggage, gold
    }

    meetEnemy(){
        // meet enemy
    }

    meetStranger(){
        // meet stranger
    }

    findItem(){
        // find item
    }

    showMessage(message: string)
    {
        let container = document.getElementById('main');
        let childContainer = document.createElement('div');
        childContainer.innerText = message;
        container?.appendChild(childContainer);
    }
  }