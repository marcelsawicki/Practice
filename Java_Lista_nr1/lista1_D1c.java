/**
 * @(#)harnbeam.java
 *
 * excercise D1 from list no. 1 (c)
 * @author: Marcel Sawicki
 * @version 1.00 2013/11/25
 */
 
import static java.lang.Math.*;

public class Harnbeam{
	
	private static double odl(double xa, double xb, double ya, double yb){
		double dx= xa-xb;
		double dy= ya-yb;
		return Math.sqrt(dx*dx+dy*dy);
    }//odl
	
	public static void main(String[] args){
		double x0=Czytanie.czytajDouble("Wspolrzedna punktu P x0=");
		double y0=Czytanie.czytajDouble("Wspolrzedna punktu P y0=");
		
		
		if(x0>=0 && y0>=0){System.out.println("Obszar nr 1.");
						double r0=odl(0,x0,0,y0);
						 System.out.println("Utworzony promien od srodka okregu (0,0) do P(x,y)="+r0);
						 if(x0<=1 && y0<=1 && y0<=-(x0-1)){System.out.println("Punkt lezy w trojkacie kolorowym.");};
						 if(x0<=1 && y0<=1 && y0>-(x0-1)){System.out.println("Punkt lezy w trojkacie szarym.");};
						 if(x0>1 || y0>1){System.out.println("Punkt nie lezy w trojkacie kolorowym i nie lezy w trójk¹cie .");};
						};
		//*********************************************************************************************************************	
		if(x0<=0 && y0>=0){System.out.println("Obszar nr 2.");
						double r0=odl(0,x0,0,y0);
						 System.out.println("Utworzony promien od srodka okregu (0,0) do P(x,y)="+r0);
						 if(x0>=-1 && y0<=1 && y0<=(-x0)){System.out.println("Punkt lezy w trojkacie kolorowym.");}
						 if(x0>=-1 && y0<=1 && y0>(-x0)){System.out.println("Punkt lezy w trojkacie szarym.");};
						 
						 if(x0<-1 || y0>1){System.out.println("Punkt nie lezy w trojkacie i nie lezy w kwadracie.");};
						};
		//*********************************************************************************************************************	
		if(x0<=0 && y0<=0){System.out.println("Obszar nr 3.");
						double r0=odl(0,x0,0,y0);
						 System.out.println("Utworzony promien od srodka okregu (0,0) do P(x,y)="+r0);
						 if(x0>=-1 && y0>=-1 && y0<=-(x0+1)){System.out.println("Punkt lezy w trojkacie kolorowym.");};
						 if(x0>=-1 && y0>=-1 && y0>-(x0+1)){System.out.println("Punkt lezy w trojkacie szarym.");};
						 if(x0<-1 || y0>1){System.out.println("Punkt nie lezy w trojkacie kolorowym i nie lezy w trójk¹cie .");};
						};
		//*********************************************************************************************************************	
		if(x0>=0 && y0<=0){System.out.println("Obszar nr 4.");
						 double r0=odl(0,x0,0,y0);
						 System.out.println("Utworzony promien od srodka okregu (0,0) do P(x,y)="+r0);
						 if(x0<=1 && y0>=-1 && y0<=(-x0)){System.out.println("Punkt lezy w trojkacie kolorowym.");}
						 if(x0<=1 && y0>=-1 && y0>(-x0)){System.out.println("Punkt lezy w trojkacie szarym.");};
						 
						 if(x0>1 || y0<-1){System.out.println("Punkt nie lezy w trojkacie i nie lezy w kwadracie.");};
						};	
	}
}  