public class Liczba{

	//settery
public static double ustawA(){
	double a=Czytanie.czytajDouble("a=");
	return a;
}

public static double ustawB(){
	double b=Czytanie.czytajDouble("b=");
	return b;
}

public static double ustawC(){
	double c=Czytanie.czytajDouble("c=");
	return c;
}
	//gettery
public static void rosnacoLiczby(double a, double b, double c){


System.out.println("Podane liczby wydrukowane rosnaco:");

if( (a<=b) && (a<=c) ){System.out.println(a); 
						if(b<=c){System.out.println(b); System.out.println(c);}
							else{ if(c<=b){System.out.println(c); System.out.println(b);}};
						};  

if( (b<=a) && (b<=c) ){System.out.println(b); 
						if(a<=c){System.out.println(a); System.out.println(c);}
							else{ if(c<=a){System.out.println(c); System.out.println(a);}};
						};  

if( (c<=b) && (c<=a) ){System.out.println(c); 
						if(b<=a){System.out.println(b); System.out.println(a);}
							else{ if(a<=b){System.out.println(a); System.out.println(b);}};
						};
						System.out.println("Wydruk podanych liczb, w podanej kolejnosci: "+a+", "+b+", "+c);
}  

}	        