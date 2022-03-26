import Point2d from "./Point2d";
import Point3d from "./Point3d";

export default abstract class Pointfactory
{

public static GetFromPoint3d(point3d: Point3d): Point2d
{
    let xe=point3d.x/(1+(point3d.z/point3d.d));
    let ye=point3d.y/(1+(point3d.z/point3d.d));
    return new Point2d(xe, ye);
}
}