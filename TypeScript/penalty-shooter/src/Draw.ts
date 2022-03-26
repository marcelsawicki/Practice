import { Message } from "./Message";
import Point2d from "./Point2d";
import Point from "./Point3d";
import Pointfactory from "./PointFactory";
export default class Draw {

DrawGate(context: CanvasRenderingContext2D) {
	let d: number = 2100;

	let pointA = new Point(100,100,900,d);
	let pointB = new Point(600,100,900,d);
	let pointC = new Point(100,400,900,d);
	let pointD = new Point(600,400,900,d);

	let pointE = new Point(100,100,1200,d);
	let pointF = new Point(600,100,1200,d);
	let pointG = new Point(100,400,1200,d);
	let pointH = new Point(600,400,1200,d);
	
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
		let pointBB: Point2d = Pointfactory.GetFromPoint3d(element.RotateOY(10));
		list2d.push(pointBB);
	});

	this.DrawLine(context, list2d[0], list2d[1], 'white');
	this.DrawLine(context, list2d[0], list2d[2], 'white');
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
    context.lineWidth = 2;
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

public Shoot(context: CanvasRenderingContext2D, messanger: Message) {
	let animate: number = 0;
	let self = this;
	let alfaBall = 45;
	let v0: number = 75;
	let pilka: Point = new Point(400,300,-1400,2100)
	pilka.RotateOY(10)
	let pilka3dto2d: Point2d = Pointfactory.GetFromPoint3d(pilka);

		setInterval(function() {	
			self.DrawPoint(context, Pointfactory.GetFromPoint3d(pilka).x, Pointfactory.GetFromPoint3d(pilka).y, 'green');
			pilka.z++;
			pilka.y=-Math.tan(alfaBall*Math.PI/180)*pilka.z-(((9.81/(2*Math.pow(v0,2)*Math.pow(Math.cos(alfaBall*Math.PI/180),2))))*Math.pow(pilka.z,2));		
			self.DrawPoint(context, Pointfactory.GetFromPoint3d(pilka).x, Pointfactory.GetFromPoint3d(pilka).y, 'white');
			console.log(`(x,y,x) = ${pilka.x}, ${pilka.y}, ${pilka.z}`)
			console.log(`(x,y) = ${Pointfactory.GetFromPoint3d(pilka).x}, ${Pointfactory.GetFromPoint3d(pilka).y}`)
			messanger.ShowMessage(`(x,y,x) = ${pilka.x}, ${pilka.y}, ${pilka.z}`);
			messanger.ShowMessage(`(x,y) = ${Pointfactory.GetFromPoint3d(pilka).x}, ${Pointfactory.GetFromPoint3d(pilka).y}`)
				if(pilka.z>0)
				{
					clearInterval(1);
					console.log("exit");
				}
	  }, 5);
}

}