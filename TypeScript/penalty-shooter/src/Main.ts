import { Message } from "./Message";
import Draw from "./Draw";
import { exit } from "process";


function showMessage(message: Message)
{
	let container = document.getElementById('main');
	let childContainer = document.createElement('div');
	childContainer.innerText = message.body;

	container?.appendChild(childContainer);
}

let initMessage: Message = new Message(1, 1, "Project template", "Project template body");
let endMessage: Message = new Message(1, 1, "End template", "End message");
showMessage(initMessage);

let canvas: HTMLCanvasElement = document.getElementById('kanwa') as HTMLCanvasElement;
let context: CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D;

Draw.DrawField(context, canvas);

window.onload = function()
{
	let x_p: number=0;
	let y_p: number=0;
	let alfa: number=45;
	let v0: number=75;
	setInterval(function() {
		Draw.DrawLine(context, x_p-8, y_p-8, x_p+8, y_p+8,'green');
		x_p++
		y_p=Math.tan(alfa)*x_p-(((9.81/(2*Math.pow(v0,2)*Math.pow(Math.cos(alfa),2))))*Math.pow(x_p,2));
		y_p=canvas.height - Math.floor(y_p);
		Draw.DrawLine(context, x_p, y_p, x_p+3, y_p+3,'white');
		if(y_p>canvas.height){
			
			showMessage(endMessage);
			clearInterval(1);
		}
  }, 25);

  

}

