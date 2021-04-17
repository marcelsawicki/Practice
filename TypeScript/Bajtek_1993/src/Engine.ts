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
        let container = document.getElementById('content');
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
    
    dispatchEvent(){
        let randomNumber = Math.floor(Math.random()*this.storyEventData.length);
        let randomEvent = this.storyEventData[randomNumber];

        switch(randomEvent.typeOfEvent) { 
            case "wrog": { 
               //statements; 
               this.meetEnemy(randomNumber)
               break; 
            } 
            case "nieznajomy": { 
               //statements; 
               this.meetStranger(randomNumber);
               break; 
            } 
            case "przedmiot": { 
                this.findItem(randomNumber);
                //statements; 
                break; 
             } 
            default: { 
               //statements; 
               break; 
            } 
         }
    }

    meetEnemy(randomNumber: number){
        // meet enemy
        let enemyDescription = this.storyEventData[randomNumber].description;
        let enemyStrength = this.storyEventData[randomNumber].strength;
        let container = document.getElementById('content');
        let childContainer = document.createElement('div');
        childContainer.innerText = 'Zza krzkow wyskoczyl ' + enemyDescription + ' o sile: ' + enemyStrength + '.';
        container?.appendChild(childContainer);
        childContainer.scrollIntoView({ behavior: "smooth", block: "end" });
    }

    meetStranger(randomNumber: number){
        // meet stranger
        let message = this.storyEventData[randomNumber].description;
        let container = document.getElementById('content');
        let childContainer = document.createElement('div');
        childContainer.innerText = 'Spotkales ' + message + '.';
        container?.appendChild(childContainer);
    }

    findItem(randomNumber: number){
        // find item
        let message = this.storyEventData[randomNumber].description;
        let container = document.getElementById('content');
        let childContainer = document.createElement('div');
        childContainer.innerText = 'Znalazles ' + message + '.';
        container?.appendChild(childContainer);
    }

    showMessage(message: string)
    {
        let container = document.getElementById('content');
        let childContainer = document.createElement('div');
        childContainer.innerText = message;
        container?.appendChild(childContainer);
    } 
  }