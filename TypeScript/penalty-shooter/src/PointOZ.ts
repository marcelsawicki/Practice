export default class PointOZ
{
    public xe: number;
    public ye: number;

    constructor(x: number, y: number, z: number, d: number, alfa: number)
    {
        let xp: number;
        let yp: number;

        x = x*Math.cos(alfa*Math.PI/180)-y*Math.sin(alfa*Math.PI/180);
        y = x*Math.sin(alfa*Math.PI/180)+y*Math.cos(alfa*Math.PI/180);

        xp=x/(1+(z/d))+200
        yp=y/(1+(z/d))-100

        this.xe = Math.floor(xp);
        this.ye = Math.floor(yp);
        console.log(`xe= ${this.xe} ye=${this.xe}`);
    }
    // constructor(x: number, y: number, z: number, A: number, B: number, C: number, D: number, odl_ekr: number, fi: number, teta: number, R: number)
    // {
    //     let deg = (Math.PI/180); 
    //     let sf = Math.sin(fi*deg); 
    //     let cf = Math.cos(fi*deg);
    //     let st = Math.sin(teta*deg);
    //     let ct = Math.cos(teta*deg);

    //     let xn = -sf*x + cf*y;
    //     let yn = -cf*ct*x - sf*ct*y + st*z;
    //     let zn = -cf*st*x - sf*st*y - ct*z+R;

    //     this.xe = Math.floor(A*xn*odl_ekr/zn + B);
    //     this.ye = Math.floor(C*yn*odl_ekr/zn + D);
    // }

}