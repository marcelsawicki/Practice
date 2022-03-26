import Point2d from "./Point2d";
import Point from "./Point3d";
import Pointfactory from "./PointFactory";
export default class Draw {
DrawGate(context: CanvasRenderingContext2D) {
	let d: number = 500;

	let pointA = new Point(100,300,400,d);
	let pointB = new Point(500,300,400,d);
	let pointC = new Point(100,400,400,d);
	let pointD = new Point(500,400,400,d);

	let pointE = new Point(100,300,800,d);
	let pointF = new Point(500,300,800,d);
	let pointG = new Point(100,400,800,d);
	let pointH = new Point(500,400,800,d);
	
    let list = new Array<Point>();
	list.push(pointA);
	list.push(pointB);
	list.push(pointC);
	list.push(pointD);

	list.push(pointE);
	list.push(pointF);
	list.push(pointG);
	list.push(pointH);
	
	let list2d = new Array<Point2d>();

	list.forEach((element) => {
		let pointAA: Point2d = Pointfactory.GetFromPoint3d(element);
		this.DrawPoint(context, pointAA.x, pointAA.y, 'black');
		let pointBB: Point2d = Pointfactory.GetFromPoint3d(element.RotateOX(340));
		this.DrawPoint(context,pointBB.x, pointBB.y, 'red');
		list2d.push(pointBB);
	});

	this.DrawLine(context, list2d[0], list2d[1], 'white');
	this.DrawLine(context, list2d[0], list2d[2], 'white');
	this.DrawLine(context, list2d[2], list2d[3], 'white');
	this.DrawLine(context, list2d[4], list2d[5], 'white');
	this.DrawLine(context, list2d[4], list2d[6], 'white');
	this.DrawLine(context, list2d[6], list2d[7], 'white');

	this.DrawLine(context, list2d[4], list2d[0], 'white');
	this.DrawLine(context, list2d[6], list2d[2], 'white');
	this.DrawLine(context, list2d[5], list2d[7], 'white');
	this.DrawLine(context, list2d[5], list2d[1], 'white');
	this.DrawLine(context, list2d[3], list2d[7], 'white');
	this.DrawLine(context, list2d[1], list2d[3], 'white');
}

DrawPoint(context: CanvasRenderingContext2D, xe: number, ye: number, color: string) {
    context.beginPath();
	context.strokeStyle = color;
    context.arc(xe, ye, 5, 0, 2 * Math.PI, true);
    context.stroke();
}

public DrawLine(context:CanvasRenderingContext2D, point1: Point2d, point2: Point2d, color: string)
{
    context.beginPath()
    context.lineWidth = 3;
	context.strokeStyle = color;
    context.moveTo(point1.x, point1.y);
    context.lineTo(point2.x, point2.y);
    context.stroke(); 
}
    
public async DrawField(context:CanvasRenderingContext2D, canvas: HTMLCanvasElement): Promise<void> {
    let fieldImage = new Image();
    fieldImage.src = 'background.png';
    await new Promise(r => fieldImage.onload=r);
    context.drawImage(fieldImage, 0, 0, 640, 480);
    }
}

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