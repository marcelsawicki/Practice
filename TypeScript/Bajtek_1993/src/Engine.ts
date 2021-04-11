import { Hero } from "./Hero";
import { IStoryEventData} from "./IStoryEventData"
import StoryEventDatabase from './StoryEventDatabase.json';

export class Engine {
    engineId: number;
    storyEventData: IStoryEventData[] = StoryEventDatabase;

    constructor(engineId: number) {
      this.engineId = engineId;
    }
    
    describeHero(hero: Hero){
        // describe Hero - toughness, strength, luggage, gold
        let container = document.getElementById('main');
        let childContainer = document.createElement('div');
        childContainer.innerText = 'Wytrzymalosc: ' + hero.toughness;
        container?.appendChild(childContainer);

        let childContainer2 = document.createElement('div');
        childContainer2.innerText = 'Sila: ' + hero.strength;
        container?.appendChild(childContainer2);
        
        let childContainer3 = document.createElement('div');
        childContainer3.innerText = 'Zloto: ' + hero.gold;
        container?.appendChild(childContainer3);

        let childContainer4 = document.createElement('div');
        childContainer4.innerText = 'Bagaz: ';
        hero.luggage.forEach(element => {
            childContainer4.innerText += element+', ';
        })

        container?.appendChild(childContainer4);
    }

    meetEnemy(){
        // meet enemy
        let message = this.storyEventData[Math.floor(Math.random()*this.storyEventData.length)].description;
        let container = document.getElementById('main');
        let childContainer = document.createElement('div');
        childContainer.innerText = message;
        container?.appendChild(childContainer);
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