import { Message } from "./Message";
import Draw from "./Draw";
import PointOY from "./PointOY";
import PointOZ from "./PointOZ";
import PointOX from "./PointOX";

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
let alfa: number = 0;


//Draw.DrawCube(context,fi,teta, 30);
let odl: number = 500;
let pointA: PointOY = new PointOY(100,100,0,odl,alfa);
let pointB: PointOY = new PointOY(200,100,0,odl,alfa);
let pointC: PointOY = new PointOY(200,200,0,odl,alfa);
let pointD: PointOY = new PointOY(200,200,100,odl,alfa);
let pointE: PointOY = new PointOY(200,100,100,odl,alfa);
let pointF: PointOY = new PointOY(100,100,100,odl,alfa);
let pointG: PointOY = new PointOY(100,200,100,odl,alfa);
let pointH: PointOY = new PointOY(100,200,0,odl,alfa);



let point1: PointOY = new PointOY(500,500,400,odl,alfa);
let point2: PointOY = new PointOY(500,500,10,odl,alfa);
let point3: PointOY = new PointOY(100,500,400,odl,alfa);
let point4: PointOY = new PointOY(100,500,10,odl,alfa);

let point5: PointOY = new PointOY(100,800,400,odl,alfa);
let point6: PointOY = new PointOY(100,800,10,odl,alfa);
let point7: PointOY = new PointOY(500,800,400,odl,alfa);
let point8: PointOY = new PointOY(500,800,10,odl,alfa);

let list: Array<PointOY> = new Array<PointOY>();
// list.push(pointA);
// list.push(pointB);
// list.push(pointC);
// list.push(pointD);
// list.push(pointE);
// list.push(pointF);
// list.push(pointG);
// list.push(pointH);
list.push(point1);
list.push(point2);
list.push(point3);
list.push(point4);
list.push(point5);
list.push(point6);
list.push(point7);
list.push(point8);
list.forEach((element) => {
	Draw.DrawPoint(context,element.xe,element.ye, 'yellow');
});

Draw.DrawLineFromPoints(context,point1, point2, 'yellow');
Draw.DrawLineFromPoints(context,point2, point4, 'yellow');
Draw.DrawLineFromPoints(context,point3, point4, 'yellow');
Draw.DrawLineFromPoints(context,point3, point1, 'red');
Draw.DrawLineFromPoints(context,point4, point6, 'yellow');
Draw.DrawLineFromPoints(context,point5, point6, 'yellow');
Draw.DrawLineFromPoints(context,point6, point8, 'yellow');
Draw.DrawLineFromPoints(context,point7, point8, 'yellow');

/////

alfa = 25;

//Draw.DrawCube(context,fi,teta, 30);




let point11 = new PointOZ(500,300,400,odl,alfa);
let point12 = new PointOZ(500,300,10,odl,alfa);
let point13 = new PointOZ(100,300,400,odl,alfa);
let point14 = new PointOZ(100,300,10,odl,alfa);

let point15 = new PointOZ(100,400,400,odl,alfa);
let point16 = new PointOZ(100,400,10,odl,alfa);
let point17 = new PointOZ(500,400,400,odl,alfa);
let point18 = new PointOZ(500,400,10,odl,alfa);

list = new Array<PointOZ>();
// list.push(pointA);
// list.push(pointB);
// list.push(pointC);
// list.push(pointD);
// list.push(pointE);
// list.push(pointF);
// list.push(pointG);
// list.push(pointH);
list.push(point11);
list.push(point12);
list.push(point13);
list.push(point14);
list.push(point15);
list.push(point16);
list.push(point17);
list.push(point18);
list.forEach((element) => {
	Draw.DrawPoint(context,element.xe,element.ye, 'yellow');
});

Draw.DrawLineFromPoints(context,point11, point12, 'blue');
Draw.DrawLineFromPoints(context,point12, point14, 'blue');
Draw.DrawLineFromPoints(context,point13, point14, 'blue');
Draw.DrawLineFromPoints(context,point13, point11, 'blue');
Draw.DrawLineFromPoints(context,point14, point16, 'blue');
Draw.DrawLineFromPoints(context,point15, point16, 'blue');
Draw.DrawLineFromPoints(context,point16, point18, 'blue');
Draw.DrawLineFromPoints(context,point17, point18, 'blue');

// window.onload = function()
// {
// 	let x_p: number=0;
// 	let y_p: number=0;
// 	let alfa: number=55;
// 	let v0: number=100;  // ball beginning speed v0
// 	let deg = (Math.PI/180)
// 	let di = 1800;  //player position N-S)
// 	let xip = 800; //player position W-E)
// 	let xi = 450;
// 	let player_deg = 5; //player kicks angle (degree)
// 	setInterval(function() {
// 		// Draw.DrawLine(context, x_p-8, y_p-8, x_p+8, y_p+8,'green');
// 		x_p++
// 		xi = xip+Math.floor(Math.tan(player_deg*deg)*x_p);
// 		y_p=Math.tan(alfa*deg)*x_p-(((9.81/(2*Math.pow(v0,2)*Math.pow(Math.cos(alfa*deg),2))))*Math.pow(x_p,2));
// 		y_p=canvas.height - Math.floor(y_p);
// 		Draw.DrawLine(context,Draw.CountX(xi,Math.floor(y_p),Math.floor(di-(1+x_p)),fi,teta,0.5),Draw.CountY(xi,Math.floor(y_p),Math.floor(di-(1+x_p)),fi,teta,0.5),Draw.CountX(xi,Math.floor(1+y_p),Math.floor(di-x_p),fi,teta,0.5),Draw.CountY(xi,Math.floor(1+y_p),Math.floor(di-x_p),fi,teta,0.5),'blue');

// 		//y_p=x_p*Math.tan(45);
		
		
// 		//Draw.DrawLine(context, 100+x_p, y_p-650, 100+x_p+3, y_p+3-650,'gray');
// 		if(y_p>canvas.height){
			
// 			showMessage(endMessage);
// 			clearInterval(1);
// 		}
//   }, 5);
// }

alfa = 15;

//Draw.DrawCube(context,fi,teta, 30);




let point21 = new PointOX(500,300,400,odl,alfa);
let point22 = new PointOX(500,300,10,odl,alfa);
let point23 = new PointOX(100,300,400,odl,alfa);
let point24 = new PointOX(100,300,10,odl,alfa);

let point25 = new PointOX(100,400,400,odl,alfa);
let point26 = new PointOX(100,400,10,odl,alfa);
let point27 = new PointOX(500,400,400,odl,alfa);
let point28 = new PointOX(500,400,10,odl,alfa);

list = new Array<PointOX>();
// list.push(pointA);
// list.push(pointB);
// list.push(pointC);
// list.push(pointD);
// list.push(pointE);
// list.push(pointF);
// list.push(pointG);
// list.push(pointH);
list.push(point11);
list.push(point12);
list.push(point13);
list.push(point14);
list.push(point15);
list.push(point16);
list.push(point17);
list.push(point18);
list.forEach((element) => {
	Draw.DrawPoint(context,element.xe,element.ye, 'yellow');
});

Draw.DrawLineFromPoints(context,point21, point22, 'cyan');
Draw.DrawLineFromPoints(context,point22, point24, 'cyan');
Draw.DrawLineFromPoints(context,point23, point24, 'cyan');
Draw.DrawLineFromPoints(context,point23, point21, 'cyan');
Draw.DrawLineFromPoints(context,point24, point26, 'cyan');
Draw.DrawLineFromPoints(context,point25, point26, 'cyan');
Draw.DrawLineFromPoints(context,point26, point28, 'cyan');
Draw.DrawLineFromPoints(context,point27, point28, 'cyan');