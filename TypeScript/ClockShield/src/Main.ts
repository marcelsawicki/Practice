import { Message } from "./Message";

class Main 
{
	private canvas: HTMLCanvasElement;
	private context: CanvasRenderingContext2D;

	constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D)
	{
		this.canvas = canvas;
		this.context = context;
	}
	
	public draw()
	{
		let ctx = this.context;
		let centerX: number = this.canvas.width/2;
		let centerY: number = this.canvas.height/2;
		let r = this.canvas.height/2;

		ctx.fillStyle = "white";
	
		ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

		ctx.beginPath();
		ctx.fillStyle = "yellow"; //blue
		ctx.arc(centerX, centerY, r, 0, 2 * Math.PI);
		ctx.fill();
		ctx.stroke();

		// rysowanie liczb na tarczy zegara
		ctx.fillStyle = "black"; //blue
		ctx.font = "30px Arial";
		for(let i = 1; i <= 12; i++)
		{
			let digitWidth: number = 20;
			let digitHeight: number = 20;
			let x: number =  (centerX + (r - digitHeight) * Math.cos(Math.PI / 6 * (i - 3)));
			let y: number =  (centerY + (r - digitHeight) * Math.sin(Math.PI / 6 * (i - 3)));
			x -= digitWidth / 2;
			y += digitHeight / 2;
			ctx.fillText(i.toString(), x, y);
		}

		let currentdate: Date = new Date();

		let hour: number = currentdate.getHours();
		let minute: number = currentdate.getMinutes();
		let second: number = currentdate.getSeconds();

		let hVal: number = hour * 60 + minute;
		let xH = (centerX + (r * 0.6) * Math.cos(Math.PI/360 * (hVal - 180)));
		let yH = (centerX + (r * 0.6) * Math.sin(Math.PI/360 * (hVal - 180)));

		let xM = (centerX + (r * 0.65) * Math.cos(Math.PI/30 * (minute - 15)));
		let yM = (centerX + (r * 0.65) * Math.sin(Math.PI/30 * (minute - 15)));

		let xS = (centerX + (r * 0.8) * Math.cos(Math.PI/30 * (second - 15)));
		let yS = (centerX + (r * 0.8) * Math.sin(Math.PI/30 * (second - 15)));

		// rysowanie wskazowek - godziny
		ctx.beginPath();
		ctx.fillStyle = "green";
		ctx.moveTo(centerX, centerY);
		ctx.lineTo(xH, yH);
		ctx.stroke();

		// rysowanie wskazowek - minuty
		ctx.beginPath();
		ctx.fillStyle = "red";
		ctx.moveTo(centerX, centerY);
		ctx.lineTo(xM, yM);
		ctx.stroke();

			// rysowanie wskazowek - minuty
			ctx.beginPath();
			ctx.fillStyle = "red";
			ctx.moveTo(centerX, centerY);
			ctx.lineTo(xS, yS);
			ctx.stroke();
		
	}

}
function showMessage(message: Message)
{
	let container = document.getElementById('main');
	let childContainer = document.createElement('div');
	childContainer.innerText = message.body;

	container?.appendChild(childContainer);
}

let initMessage: Message = new Message(1, 1, "Project template", "Project template body");
showMessage(initMessage);


window.onload = function()
{
	setInterval(function() {
		let canvas1: HTMLCanvasElement  = document.getElementById('kanwa') as HTMLCanvasElement;
		let context1: CanvasRenderingContext2D =  canvas1.getContext('2d') as CanvasRenderingContext2D;	
	
		let main: Main = new Main(canvas1, context1);
		main.draw()
  }, 1000);
	

}