import { Hero } from "./Hero";
import { IStoryEventData} from "./IStoryEventData"
import { StoryEvent } from "./StoryEvent";
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
    
    dispatchEvent(hero: Hero){
        let randomNumber:number = 0;
        let randomEvent:IStoryEventData = this.storyEventData[0];
        let searchForEvent = true;
        while(searchForEvent)
        {
            randomNumber = Math.floor(Math.random()*this.storyEventData.length);
            randomEvent = this.storyEventData[randomNumber];
            if(randomEvent.probability<Math.floor(Math.random()*100))
            {
                searchForEvent = false;
            }
        }
        
        
        if(hero.toughness<0)
        {
            this.showMessage('Koniec gry.');
            return;
        }

        if(hero.gold>1000)
        {
            this.showMessage('Wygrales.');
            return;
        }

        switch(randomEvent.typeOfEvent) { 
            case "wrog": { 
               //statements; 
               this.meetEnemy(randomNumber, hero)
               break; 
            } 
            case "nieznajomy": { 
               //statements; 
               this.meetStranger(randomNumber, hero);
               break; 
            } 
            case "przedmiot": { 
                this.findItem(randomNumber, hero);
                //statements; 
                break; 
             } 
            default: { 
               //statements; 
               break; 
            } 
         }
    }

    meetEnemy(randomNumber: number, hero: Hero){

        let enemyDescription = this.storyEventData[randomNumber].description;
        let enemyStrength = this.storyEventData[randomNumber].strength;
        if(enemyDescription=="nic")
        {
            this.showMessage("Nic nie spotkales.");
        }
        else
        {
            let button2 = <HTMLInputElement> document.getElementById('go-button');
            button2.disabled = true;
            let container = document.getElementById('content');
            let childContainer = document.createElement('div');
            childContainer.innerText = 'Zza krzkow wyskoczyl ' + enemyDescription + ' o sile: ' + enemyStrength + '.';
            container?.appendChild(childContainer);
            childContainer.scrollIntoView({ behavior: "smooth", block: "end" });
        }

    }

    meetStranger(randomNumber: number, hero: Hero){
        let stranger = this.storyEventData[randomNumber].description;
        let container = document.getElementById('content');
        let childContainer = document.createElement('div');
        childContainer.innerText = 'Spotkales ' + stranger + '.';
        container?.appendChild(childContainer);
        switch(stranger) { 
            case "zlodziej": {  
               hero.gold=0;
               hero.luggage=[];
               break; 
            } 
            case "czarodziej": { 
               hero.toughness+=1;
               break; 
            } 
            case "dobrego duszka": { 
                hero.strength+=1;
                break; 
             } 
             case "zlego ducha": { 
                hero.strength>0?hero.strength-=1:null;
                break; 
             } 
            default: { 
               break; 
            } 
         }
    }

    findItem(randomNumber: number, hero: Hero){
        let item = this.storyEventData[randomNumber].description;
        let container = document.getElementById('content');
        let childContainer = document.createElement('div');
        childContainer.innerText = 'Znalazles ' + item + '.';
        switch(item) { 
            case "trucizna": {  
               hero.toughness-=1;
               break; 
            } 
            case "magiczny eliksir": { 
               hero.toughness+=1;
               break; 
            } 
            case "zloto": { 
                hero.gold+=1;
                break; 
             } 
             case "sztuka miesa": { 
                hero.strength+=1;
                break; 
             } 
            default: { 
               hero.luggage.push(item); 
               break; 
            } 
         }
        
        container?.appendChild(childContainer);
    }

    fight(hero: Hero)
    {
        this.showMessage("Walczysz.");
        let button2 = <HTMLInputElement> document.getElementById('go-button');
        button2.disabled = false;
    }

    flee(hero: Hero)
    {
        this.showMessage("Uciekasz.");
        let button2 = <HTMLInputElement> document.getElementById('go-button');
        button2.disabled = false;
    }

    negotiate(hero: Hero)
    {
        this.showMessage("Negocjujesz.");
        let button2 = <HTMLInputElement> document.getElementById('go-button');
        button2.disabled = false;
    }

    showMessage(message: string)
    {
        let container = document.getElementById('content');
        let childContainer = document.createElement('div');
        childContainer.innerText = message;
        container?.appendChild(childContainer);
    } 
  }