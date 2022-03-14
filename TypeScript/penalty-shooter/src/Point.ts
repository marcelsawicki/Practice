export default class Point
{
    private  _x: number;
    private  _y: number;
    private  _z: number;
    private  _d: number;
    private  _alfa: number;
    private _xe: number;
    private _ye: number;
    

    constructor(x: number, y: number, z: number, d: number, alfa: number)
    {
        this._x = x;
        this._y = y;
        this._z = y;
        this._d = d;
        this._alfa = alfa;
        this._xe=Math.floor(x/(1+(z/d)));
        this._ye=Math.floor(y/(1+(z/d)));
    }

public static Recalculate(point: Point){
    point._xe=Math.floor(point._x/(1+(point._z/point._d)));
    point._ye=Math.floor(point._y/(1+(point._z/point._d)));
}
    public static RotateOX(alfa: number, point: Point): void {
        point._y = point._y*Math.cos(alfa*Math.PI/180)-point._z*Math.sin(alfa*Math.PI/180);
        point._z = point._y*Math.sin(alfa*Math.PI/180)+point._z*Math.cos(alfa*Math.PI/180);
        this.Recalculate(point);
        }
    
    public static RotateOY(alfa: number, point: Point): void {
        point._x = point._x*Math.cos(alfa*Math.PI/180)-point._z*Math.sin(alfa*Math.PI/180);
        point._z = point._x*Math.sin(alfa*Math.PI/180)+point._z*Math.cos(alfa*Math.PI/180);
        this.Recalculate(point);
        }

    public static RotateOZ(alfa: number, point: Point): void {
        point._x = point._x*Math.cos(alfa*Math.PI/180)-point._y*Math.sin(alfa*Math.PI/180);
        point._y = point._x*Math.sin(alfa*Math.PI/180)+point._y*Math.cos(alfa*Math.PI/180);
        this.Recalculate(point);
        }

}