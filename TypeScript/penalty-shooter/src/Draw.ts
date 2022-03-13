import PointOY from "./PointOY";
export default abstract class Draw {
static DrawPoint(context: CanvasRenderingContext2D, xe: number, ye: number, color: string) {
    context.beginPath();
    context.arc(xe, ye, 5, 0, 2 * Math.PI, true);
    context.stroke();
}

public static DrawLineFromPoints(context:CanvasRenderingContext2D, point1: PointOY, point2:PointOY, color: string)
{
    context.beginPath()
    context.lineWidth = 5;
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

public static DrawField(context:CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {
        context.fillStyle = "green";
        context.fillRect(0, 0, canvas.width, canvas.height);
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