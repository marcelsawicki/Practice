export default  class Point
{
    public  x: number;
    public  y: number;
    public  z: number;
    public  d: number;
    public  alfa: number;
    public xe: number;
    public ye: number;
    

    constructor(x: number, y: number, z: number, d: number, alfa: number)
    {
        this.x = x;
        this.y = y;
        this.z = y;
        this.d = d;
        this.alfa = alfa;
        this.xe=Math.floor(x/(1+(z/d))+50);
        this.ye=Math.floor(y/(1+(z/d))-100);
    }

    public Recalculate(){
        this.xe=Math.floor(this.x/(1+(this.z/this.d)));
        this.ye=Math.floor(this.y/(1+(this.z/this.d)));
    }
    public RotateOX(alfa: number): void {
        this.y = this.y*Math.cos(alfa*Math.PI/180)-this.z*Math.sin(alfa*Math.PI/180);
        this.z = this.y*Math.sin(alfa*Math.PI/180)+this.z*Math.cos(alfa*Math.PI/180);
        this.xe=Math.floor(this.x/(1+(this.z/this.d)));
        this.ye=Math.floor(this.y/(1+(this.z/this.d)));
        }
    
    public RotateOY(alfa: number): void {
        this.x = this.x*Math.cos(alfa*Math.PI/180)-this.z*Math.sin(alfa*Math.PI/180);
        this.z = this.x*Math.sin(alfa*Math.PI/180)+this.z*Math.cos(alfa*Math.PI/180);
        this.xe=Math.floor(this.x/(1+(this.z/this.d)));
        this.ye=Math.floor(this.y/(1+(this.z/this.d)));
        }

    public RotateOZ(alfa: number): void {
        this.x = this.x*Math.cos(alfa*Math.PI/180)-this.y*Math.sin(alfa*Math.PI/180);
        this.y = this.x*Math.sin(alfa*Math.PI/180)+this.y*Math.cos(alfa*Math.PI/180);
        this.xe=Math.floor(this.x/(1+(this.z/this.d)));
        this.ye=Math.floor(this.y/(1+(this.z/this.d)));
        }

}