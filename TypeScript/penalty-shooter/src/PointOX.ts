export default class PointOX
{
    public xe: number;
    public ye: number;

    constructor(x: number, y: number, z: number, d: number, alfa: number)
    {
        let xp: number;
        let yp: number;
        y = y*Math.cos(alfa*Math.PI/180)-z*Math.sin(alfa*Math.PI/180);
        z = y*Math.sin(alfa*Math.PI/180)+z*Math.cos(alfa*Math.PI/180);

        xp=x/(1+(z/d))+200
        yp=y/(1+(z/d))-100

        this.xe = Math.floor(xp);
        this.ye = Math.floor(yp);
        console.log(`xe= ${this.xe} ye=${this.xe}`);
    }

}