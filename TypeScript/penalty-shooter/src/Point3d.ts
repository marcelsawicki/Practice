import Point2d from "./Point2d";

export default  class Point3d
{
    public  x: number;
    public  y: number;
    public  z: number;
    public  d: number;
    

    constructor(x: number, y: number, z: number, d: number)
    {
        this.x = x;
        this.y = y;
        this.z = z;
        this.d = d;
    }

    public RotateOX(alfaX: number): Point3d {
        this.y = this.y*Math.cos(alfaX*(Math.PI/180))-this.z*Math.sin(alfaX*(Math.PI/180));
        this.z = this.y*Math.sin(alfaX*(Math.PI/180))+this.z*Math.cos(alfaX*(Math.PI/180));
        return this;
        }
    
    public RotateOY(alfaY: number): Point3d {
        this.x = this.x*Math.cos(alfaY*(Math.PI/180))+this.z*Math.sin(alfaY*(Math.PI/180));
        this.z = -this.x*Math.sin(alfaY*(Math.PI/180))+this.z*Math.cos(alfaY*(Math.PI/180));
        return this;
        }

    public RotateOZ(alfaZ: number): Point3d {
        this.x = this.x*Math.cos(alfaZ*Math.PI/180)-this.y*Math.sin(alfaZ*Math.PI/180);
        this.y = this.x*Math.sin(alfaZ*Math.PI/180)+this.y*Math.cos(alfaZ*Math.PI/180);
        return this;
        }
}