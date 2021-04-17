import { Engine } from "./Engine";
import { Hero } from "./Hero";

window.onload = () => {
	let engine: Engine = new Engine(1);
	let hero: Hero = new Hero(1,2,3,["miecz","sakiewka"],1);

	let button1 = document.getElementById('hero-describe');
	button1?.addEventListener("click", function(){ engine.describeHero(hero) }, false);

	let button2 = document.getElementById('go-button');
	button2?.addEventListener("click", function(){ engine.dispatchEvent(hero) }, false);

	let button3 = document.getElementById('fight-button');
	button3?.addEventListener("click", function(){ engine.fight(hero) }, false);

	let button4 = document.getElementById('flee-button');
	button4?.addEventListener("click", function(){ engine.flee(hero) }, false);

	let button5 = document.getElementById('negotiate-button');
	button5?.addEventListener("click", function(){ engine.negotiate(hero) }, false);

	let end:boolean = false;
	let ile: number = 0;
}
