import { Engine } from "./Engine";
import { Hero } from "./Hero";

window.onload = () => {
	let engine: Engine = new Engine(1);
	let hero: Hero = new Hero(1,2,3,["miecz","sakiewka"],1);

	let button1 = document.getElementById('button1');
	button1?.addEventListener("click", function(){ engine.describeHero(hero) }, false);

	let button2 = document.getElementById('button2');
	button2?.addEventListener("click", function(){ engine.meetEnemy() }, false);

	let end:boolean = false;
	let ile: number = 0;
	engine.showMessage('hello world');
}
