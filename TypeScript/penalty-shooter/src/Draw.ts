import Point from "./Point";
export default abstract class Draw {
static DrawGate(context: CanvasRenderingContext2D) {
	let alfa: number = 5;
	let odl: number = 500;

	let point11 = new Point(500,300,400,odl,alfa);
	let point12 = new Point(500,300,10,odl,alfa);
	let point13 = new Point(100,300,400,odl,alfa);
	let point14 = new Point(100,300,10,odl,alfa);
	let point15 = new Point(100,400,400,odl,alfa);
	let point16 = new Point(100,400,10,odl,alfa);
	let point17 = new Point(500,400,400,odl,alfa);
	let point18 = new Point(500,400,10,odl,alfa);
	
    let list = new Array<Point>();
	list.push(point11);
	list.push(point12);
	list.push(point13);
	list.push(point14);
	list.push(point15);
	list.push(point16);
	list.push(point17);
	list.push(point18);
	list.forEach((element) => {
		Draw.DrawPoint(context,element.xe,element.ye, 'white');
	});
	

	Draw.DrawLineFromPoints(context,point11, point12, 'white');
    Draw.DrawLineFromPoints(context,point13, point15, 'white');
    Draw.DrawLineFromPoints(context,point11, point17, 'white');
    Draw.DrawLineFromPoints(context,point15, point17, 'white');
	Draw.DrawLineFromPoints(context,point12, point14, 'white');
	Draw.DrawLineFromPoints(context,point13, point14, 'white');
	Draw.DrawLineFromPoints(context,point13, point11, 'white');
	Draw.DrawLineFromPoints(context,point14, point16, 'white');
	Draw.DrawLineFromPoints(context,point15, point16, 'white');
	Draw.DrawLineFromPoints(context,point16, point18, 'white');
	Draw.DrawLineFromPoints(context,point17, point18, 'white');
    Draw.DrawLineFromPoints(context,point12, point18, 'white');
}
static DrawPoint(context: CanvasRenderingContext2D, xe: number, ye: number, color: string) {
    context.beginPath();
    context.arc(xe, ye, 5, 0, 2 * Math.PI, true);
    context.stroke();
}

public static DrawLineFromPoints(context:CanvasRenderingContext2D, point1: Point, point2: Point, color: string)
{
    context.beginPath()
    context.lineWidth = 3;
	context.strokeStyle = color;
    context.moveTo(point1.xe, point1.ye);
    context.lineTo(point2.xe, point2.ye);
    context.stroke(); 
}
    
public static DrawFloor(): string {
    return "Draw floor";
    }

public static DrawWall(): string {
    return "Draw wall";
    }

public static async DrawField(context:CanvasRenderingContext2D, canvas: HTMLCanvasElement): Promise<void> {
    let fieldImage = new Image();
    fieldImage.src = 'background.png';
    await new Promise(r => fieldImage.onload=r);
    context.drawImage(fieldImage, 0, 0, 640, 480);
    }
public static DrawCube(context:CanvasRenderingContext2D, fi: number, teta: number, skala: number)
{
    let a = Draw.CountX(10,10,0,fi,teta,skala);
    let b =  Draw.CountY(10,10,0,fi,teta,skala);
    Draw.DrawLine(context, Draw.CountX(10,10,0,fi,teta,skala), Draw.CountY(10,10,0,fi,teta,skala), Draw.CountX(10,20,0,fi,teta,skala), Draw.CountY(10,20,0,fi,teta,skala),'yellow');
    Draw.DrawLine(context, Draw.CountX(20,10,0,fi,teta,skala), Draw.CountY(20,10,0,fi,teta,skala), Draw.CountX(20,20,0,fi,teta,skala), Draw.CountY(20,20,0,fi,teta,skala),'yellow');
    Draw.DrawLine(context, Draw.CountX(20,20,0,fi,teta,skala), Draw.CountY(20,20,0,fi,teta,skala), Draw.CountX(10,20,0,fi,teta,skala), Draw.CountY(10,20,0,fi,teta,skala),'yellow');
    Draw.DrawLine(context, Draw.CountX(20,10,0,fi,teta,skala), Draw.CountY(20,10,0,fi,teta,skala), Draw.CountX(10,10,0,fi,teta,skala), Draw.CountY(10,10,0,fi,teta,skala),'yellow');
    Draw.DrawLine(context, Draw.CountX(20,20,0,fi,teta,skala), Draw.CountY(20,20,0,fi,teta,skala), Draw.CountX(20,20,10,fi,teta,skala),   Draw.CountY(20,20,10,fi,teta,skala),'yellow');
    Draw.DrawLine(context, Draw.CountX(20,20,10,fi,teta,skala), Draw.CountY(20,20,10,fi,teta,skala), Draw.CountX(20,10,10,fi,teta,skala), Draw.CountY(20,10,10,fi,teta,skala),'yellow');
    Draw.DrawLine(context, Draw.CountX(20,10,10,fi,teta,skala), Draw.CountY(20,10,10,fi,teta,skala), Draw.CountX(20,10,0,fi,teta,skala), Draw.CountY(20,10,0,fi,teta,skala),'yellow');
    Draw.DrawLine(context, Draw.CountX(20,10,10,fi,teta,skala), Draw.CountY(20,10,10,fi,teta,skala), Draw.CountX(10,10,10,fi,teta,skala), Draw.CountY(10,10,10,fi,teta,skala),'yellow');
    Draw.DrawLine(context, Draw.CountX(10,10,10,fi,teta,skala), Draw.CountY(10,10,10,fi,teta,skala), Draw.CountX(10,10,0,fi,teta,skala), Draw.CountY(10,10,0,fi,teta,skala),'yellow');
    Draw.DrawLine(context, Draw.CountX(10,10,10,fi,teta,skala), Draw.CountY(10,10,10,fi,teta,skala), Draw.CountX(10,20,10,fi,teta,skala), Draw.CountY(10,20,10,fi,teta,skala),'yellow');
    Draw.DrawLine(context, Draw.CountX(10,20,10,fi,teta,skala), Draw.CountY(10,20,10,fi,teta,skala), Draw.CountX(10,20,0,fi,teta,skala), Draw.CountY(10,20,0,fi,teta,skala),'yellow');
    Draw.DrawLine(context, Draw.CountX(0,20,10,fi,teta,skala), Draw.CountY(0,20,10,fi,teta,skala), Draw.CountX(30,20,10,fi,teta,skala), Draw.CountY(30,20,10,fi,teta,skala),'white');
}

public static DrawLine(context:CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number, color:string): void {
	context.beginPath()
    context.lineWidth = 5;
	context.strokeStyle = color;
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
}

public static CountX(xa: number, ya: number, za: number, fi: number, teta: number, skala: number): number
{
	let wsp_x: number = 640;//160;
	let wsp_y: number = 480;//120;
	let dist: number =100;
	
	let xn: number = -Math.sin(fi*Math.PI/180)*xa+Math.cos(fi*Math.PI/180)*ya;
	let yn: number = -Math.cos(fi*Math.PI/180)*xa-Math.sin(fi*Math.PI/180)*ya+Math.sin(teta*Math.PI/180)*za;
	let zn: number = -Math.cos(fi*Math.PI/180)*Math.sin(teta*Math.PI/180)*ya-Math.cos(teta*Math.PI/180)*za+dist;
	let x: number = skala*xn/(zn+dist)+wsp_x;
    let y: number = skala*yn/(zn+dist)+wsp_y;
	 
	let xp: number = xa + za*(Math.cos((teta*Math.PI/180))*0.5);
	return Math.floor(xp*skala);
}

public static CountY(xa: number, ya: number, za: number, fi: number, teta: number, skala: number): number
{
	let wsp_x: number = 1280;//160;
	let wsp_y: number = 960;//120;
	let dist: number = 100;
	
	let xn: number = -Math.sin(fi*Math.PI/180)*xa+Math.cos(fi*Math.PI/180)*ya;
	let yn: number = -Math.cos(fi*Math.PI/180)*xa-Math.sin(fi*Math.PI/180)*ya+Math.sin(teta*Math.PI/180)*za;
	let zn: number = -Math.cos(fi*Math.PI/180)*Math.sin(teta*Math.PI/180)*ya-Math.cos(teta*Math.PI/180)*za+dist;
	let x: number = skala*xn/(zn+dist)+wsp_x;
	let y: number = skala*yn/(zn+dist)+wsp_y;
	let yp: number  = ya + za *(Math.sin((teta*Math.PI/180))*0.5);
	return Math.floor(yp*skala);
}

}