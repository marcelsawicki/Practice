import Point2d from "./Point2d";
import Point from "./Point3d";

export default abstract class Pointfactory
{

public static GetFromPoint3d(point3d: Point): Point2d
{
    let xe=0.5*(point3d.x/(1+(point3d.z/point3d.d)))+125;
    let ye=0.5*(point3d.y/(1+(point3d.z/point3d.d)))+50;
    return new Point2d(xe, ye);
}
}