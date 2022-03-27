import { Message } from "./Message";
import Draw from "./Draw";

let messanger: Message = new Message();
messanger.ShowMessage("Penalty shooter");


let canvas: HTMLCanvasElement = document.getElementById('kanwa') as HTMLCanvasElement;
let context: CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D;
let shootButton: HTMLButtonElement = document.getElementById('shoot-button') as HTMLButtonElement;
let rzut_ukosny_kat_input: HTMLButtonElement = document.getElementById('rzut_ukosny_kat') as HTMLButtonElement;
let rzut_ukosny_predkosc_poczatkowa_input: HTMLButtonElement = document.getElementById('rzut_ukosny_predkosc_poczatkowa') as HTMLButtonElement;
let kat_horizontal_input: HTMLButtonElement = document.getElementById('kat_horizontal') as HTMLButtonElement;

let draw: Draw = new Draw();

draw.DrawField(context, canvas).then(() => {
	draw.DrawGate(context);

	shootButton.addEventListener("click", (event)=>{ 
		let rzut_ukosny_kat: number = Number.parseInt(rzut_ukosny_kat_input.value);
		let rzut_ukosny_predkosc_poczatkowa: number = Number.parseInt(rzut_ukosny_predkosc_poczatkowa_input.value);
		let kat_horizontal: number = Number.parseInt(kat_horizontal_input.value);
		draw.Shoot(context, messanger, rzut_ukosny_kat, rzut_ukosny_predkosc_poczatkowa, kat_horizontal);
	});	
	//draw.Shoot(context, messanger,40,100,5);
});

