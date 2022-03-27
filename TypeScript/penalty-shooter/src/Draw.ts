import { Message } from "./Message";
import Point2d from "./Point2d";
import Point from "./Point3d";
import Pointfactory from "./PointFactory";
export default class Draw {

DrawGate(context: CanvasRenderingContext2D) {
	let d: number = 500;
	let korekta_x: number = 225;
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
		let pointBB: Point2d = Pointfactory.GetFromPoint3d(element,korekta_x,50);
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

	this.DrawLine(context, Pointfactory.GetFromPoint3d(new Point(-1000,400,900,d),korekta_x,50), Pointfactory.GetFromPoint3d(new Point(2000,400,900,d),korekta_x,50),'white');
	this.DrawLine(context, Pointfactory.GetFromPoint3d(new Point(-400,400,0,d),korekta_x,50), Pointfactory.GetFromPoint3d(new Point(800,400,0,d),korekta_x,50),'white');
	
	this.DrawLine(context, Pointfactory.GetFromPoint3d(new Point(-200,400,450,d),korekta_x,50), Pointfactory.GetFromPoint3d(new Point(800,400,450,d),korekta_x,50),'white');
	this.DrawLine(context, Pointfactory.GetFromPoint3d(new Point(-200,400,450,d),korekta_x,50), Pointfactory.GetFromPoint3d(new Point(-200,400,900,d),korekta_x,50),'white');
	this.DrawLine(context, Pointfactory.GetFromPoint3d(new Point(800,400,450,d),korekta_x,50), Pointfactory.GetFromPoint3d(new Point(800,400,900,d),korekta_x,50),'white');
	
	this.DrawStartPoint(context, Pointfactory.GetFromPoint3d(new Point(350,400,0,d),korekta_x,50).x, Pointfactory.GetFromPoint3d(new Point(350,400,0,d),korekta_x,50).y, 'white')
}

DrawPoint(context: CanvasRenderingContext2D, xe: number, ye: number, color: string) {
    context.beginPath();
	context.strokeStyle = color;
	context.globalAlpha = 1;
    context.arc(xe, ye, 5, 0, 2 * Math.PI, true);
    context.stroke();
}

DrawStartPoint(context: CanvasRenderingContext2D, xe: number, ye: number, color: string) {
    context.beginPath();
	context.strokeStyle = color;
	context.globalAlpha = 1;
    context.arc(xe, ye, 4, 0, 2 * Math.PI, true);
	context.lineWidth = 1;
    context.stroke();
}

DrawBall(context: CanvasRenderingContext2D, xe: number, ye: number, color: string, size: number) {
	context.beginPath();
	context.strokeStyle = color;
	context.globalAlpha = 1;
    context.arc(xe, ye, 5, 0, 2 * Math.PI, true);
	context.lineWidth = size;
    context.stroke();
}


public DrawLine(context:CanvasRenderingContext2D, point1: Point2d, point2: Point2d, color: string)
{
    context.beginPath()
    context.lineWidth = 1;
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

public Shoot(context: CanvasRenderingContext2D, messanger: Message, rzut_ukosny_kat: number, rzut_ukosny_predkosc_poczatkowa: number, kat_horizontal: number ) {
	let d: number = 500;
	let animate: number = 0;
	let pilka: Point = new Point(400,400,0,d)
	let korekta_x: number = 225;
	//pilka.RotateOY(25)
	let xe : number;
	let ye: number;
	let old_xe: number;
	let old_ye: number;
	let rzut_ukosny:number =0;

		setInterval(() => {				
			if(old_xe !=null && old_ye !=null)
			{
				this.DrawBall(context, old_xe, old_ye, 'rgba(40, 191, 63, 1)',5);
			}
			animate++;
			pilka.SetZ(pilka.GetZ()+animate);
			rzut_ukosny=Math.tan(rzut_ukosny_kat*Math.PI/180)*pilka.GetZ()-(((9.81/(2*Math.pow(rzut_ukosny_predkosc_poczatkowa,2)*Math.pow(Math.cos(rzut_ukosny_kat*Math.PI/180),2))))*Math.pow(pilka.GetZ(),2));		
			pilka.SetY(400 - rzut_ukosny);
			pilka.SetX(350+Math.tan(kat_horizontal*Math.PI/180)*pilka.GetZ());

			xe=Pointfactory.GetFromPoint3d(pilka,korekta_x,50).x;
			ye=Pointfactory.GetFromPoint3d(pilka,125,50).y
			this.DrawBall(context, xe, ye, 'rgba(255, 255, 255, 1)',4);
			//this.DrawPoint(context, xe, ye, 'white');
			console.log(`(x,y,z) = ${pilka._x}, ${pilka._y}, ${pilka._z}`)
			console.log(`(x,y) = ${Pointfactory.GetFromPoint3d(pilka,korekta_x,50).x}, ${Pointfactory.GetFromPoint3d(pilka,korekta_x,50).y}`)
			messanger.ShowMessage(`(x,y,z) / (rzut ukosny)= ${pilka._x}, ${pilka._y}, ${pilka._z} / ${rzut_ukosny}`);
			//messanger.ShowMessage(`(x,y) = ${xe}, ${ye}`)
				if(rzut_ukosny<0)
				{
					clearInterval(1);
					console.log("exit");
				}
			old_xe = xe;
			old_ye = ye;
			this.DrawGate(context);
	  }, 5);
	  
}

}