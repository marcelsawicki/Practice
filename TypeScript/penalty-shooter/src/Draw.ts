export default abstract class Draw {
    
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

public static DrawLine(context:CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number, color:string): void {
	context.beginPath()
    context.lineWidth = 5;
	context.strokeStyle = color;
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
}

}