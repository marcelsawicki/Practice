import { Message } from "./Message";
import Draw from "./Draw";
import PointOY from "./PointOY";
import PointOZ from "./PointOZ";
import PointOX from "./PointOX";

let messanger: Message = new Message();
messanger.ShowMessage("Penalty shooter");


let canvas: HTMLCanvasElement = document.getElementById('kanwa') as HTMLCanvasElement;
let context: CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D;

let draw: Draw = new Draw();

draw.DrawField(context, canvas).then(() => {
	draw.DrawGate(context);
});