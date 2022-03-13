import { Message } from "./Message";
import Draw from "./Draw";


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

let fi: number = 90;
let teta: number = 30;

Draw.DrawCube(context,fi,teta, 30);


window.onload = function()
{
	let x_p: number=0;
	let y_p: number=0;
	let alfa: number=55;
	let v0: number=120;  // ball beginning speed v0
	let deg = (Math.PI/180)
	let di = 2800;  //player position N-S)
	let xip = 600; //player position W-E)
	let xi = 450;
	let player_deg = 5; //player kicks angle (degree)
	setInterval(function() {
		// Draw.DrawLine(context, x_p-8, y_p-8, x_p+8, y_p+8,'green');
		x_p++
		xi = xip+Math.floor(Math.tan(player_deg*deg)*x_p);
		y_p=Math.tan(alfa*deg)*x_p-(((9.81/(2*Math.pow(v0,2)*Math.pow(Math.cos(alfa*deg),2))))*Math.pow(x_p,2));
		y_p=canvas.height - Math.floor(y_p);
		Draw.DrawLine(context,Draw.CountX(xi,Math.floor(y_p),Math.floor(di-(1+x_p)),fi,teta,0.5),Draw.CountY(xi,Math.floor(y_p),Math.floor(di-(1+x_p)),fi,teta,0.5),Draw.CountX(xi,Math.floor(1+y_p),Math.floor(di-x_p),fi,teta,0.5),Draw.CountY(xi,Math.floor(1+y_p),Math.floor(di-x_p),fi,teta,0.5),'blue');

		//y_p=x_p*Math.tan(45);
		
		
		Draw.DrawLine(context, 100+x_p, y_p-650, 100+x_p+3, y_p+3-650,'gray');
		if(y_p>canvas.height){
			
			showMessage(endMessage);
			clearInterval(1);
		}
  }, 5);

  

}

