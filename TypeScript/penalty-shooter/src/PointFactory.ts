import Point2d from "./Point2d";
import Point from "./Point3d";

export default abstract class Pointfactory
{

public static GetFromPoint3d(point: Point, korekta_x: number, korekta_y: number): Point2d
{
    let xe=0.5*(point.GetX()/(1+(point.GetZ()/point.GetD())))+korekta_x;//125;
    let ye=0.5*(point.GetY()/(1+(point.GetZ()/point.GetD())))+korekta_y;//50;
    return new Point2d(xe, ye);
}
}