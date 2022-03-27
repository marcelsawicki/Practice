import { Message } from "./Message";
import Draw from "./Draw";

let messanger: Message = new Message();
messanger.ShowMessage("Penalty shooter");


let canvas: HTMLCanvasElement = document.getElementById('kanwa') as HTMLCanvasElement;
let context: CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D;
let shootButton: HTMLButtonElement = document.getElementById('shoot-button') as HTMLButtonElement;

let draw: Draw = new Draw();

draw.DrawField(context, canvas).then(() => {
	draw.DrawGate(context);
	shootButton.addEventListener("click", ()=>{ draw.Shoot(context, messanger,40,100,5);});	
	//draw.Shoot(context, messanger,40,100,5);
});

