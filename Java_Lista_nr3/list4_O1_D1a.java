/**
 * @(#)list4_O1_D1a.java
 *
 *
 * @author: Marcel Sawicki
 * @version 1.00 2014/1/9
 */
class Punkt{
	double punktX, punktY;
	double x,y;
	
	//setter - metody ustawiajace pola obiektu
	public void ustawX(double x){
		this.x=x;
	}
	
	public void ustawY(double y){
		this.y=y;
	}
	//getter - metody odczytujace stan obiektu
	public double pokazX(){
		return x;
	}
	
	public double pokazY(){
		return y;
	}
	
	//metody klasy
	public double odl(double xa, double xb, double ya, double yb){
	double dx= xa-xb;
	double dy= ya-yb;
	return Math.sqrt(dx*dx+dy*dy);
    }//odl
    
    //metoda sprawdzajaca przynaleznosc punktu do Obszaru nr 1.
    boolean NalezyDoObszaru1(double x0, double y0){
    	
	if(x0>0 && y0>0){System.out.println("Obszar nr 1.");
					return true;
					//double r0=odl(1,x0,1,y0);
					 //System.out.println("Utworzony promien od srodka okregu (1,1) do P(x,y)="+r0);
					 //if(r0*r0<=1*1){System.out.println("Punkt nalezy do okrêgu");};
					 //if(r0*r0>1*1 && x0<=2 && y0<=2)
					 //	{System.out.println("Punkt nie nalezy do okrêgu, ale nalezy do kwadratu.");}
					//	else{System.out.println("Punkt nie nalezy do okrêgu oraz nie nalezy do kwadratu.");};
					}else return false;  
    }
}

public class List4_O1_D1a {
	public static void main(String[] args){
		//tworze obiekt klasy Punkt	
		Punkt punktMoj=new Punkt();
		
		//pobieram wspolrzedne od uzytkownika
		punktMoj.ustawX(Czytanie.czytajDouble("x="));
		punktMoj.ustawY(Czytanie.czytajDouble("y="));
		
		punktMoj.odl(punktMoj.pokazX(),2,punktMoj.pokazY(),4);
		System.out.println(punktMoj.odl(punktMoj.pokazX(),2,punktMoj.pokazY(),4));
		
		punktMoj.NalezyDoObszaru1(punktMoj.pokazX(),punktMoj.pokazY());
	}
	
    
    
}