/**
 * @(#)ash.java
 *
 * excercise D4 from list no. 1
 * @author: Marcel Sawicki
 * @version 1.20 2013/11/11
 */
 
public class ash{
	
public static void main(String[] args){
	
double a=Czytanie.czytajDouble("dlugosc odcinka a=");
double b=Czytanie.czytajDouble("dlugosc odcinka b=");
double c=Czytanie.czytajDouble("dlugosc odcinka c=");


System.out.println("Sprawdzam, czy mozna zbudowac trojkat z odcinkow a, b, c:");
if( (a<(b+c)) && (b<(c+a)) && (c<(a+b))){ System.out.println("Z odcinkow a, b, c mozna zbudowac trojkat");
//
System.out.println("*****************************************************************************************");
if(a==b && b==c){System.out.println("Trojkat jest trojkatem rownobocznym.");};
//
if(a==b && a!=c){System.out.println("Trojkat jest trojkatem rownoramiennym.");};
if(a==c && a!=b){System.out.println("Trojkat jest trojkatem rownoramiennym.");};
if(c==b && c!=a){System.out.println("Trojkat jest trojkatem rownoramiennym.");};
//
if(a!=b && b!=c && a!=c){System.out.println("Trojkat jest trojkatem roznobocznym.");};
//
if((a*a==(b*b+c*c)) || (b*b==(a*a+c*c)) || (c*c==(b*b+a*a))){System.out.println("Trojkat jest trojkatem prostokatnym.");};
if((a*a<(b*b+c*c)) && (b*b<(a*a+c*c)) && (c*c<(b*b+a*a))){System.out.println("Trojkat jest trojkatem ostrokatnym.");};
if((a*a>(b*b+c*c)) || (b*b>(a*a+c*c)) || (c*c>(b*b+a*a))){System.out.println("Trojkat jest trojkatem rozwartokatnym.");};

System.out.println("*****************************************************************************************");

}//koniec sprawdzania czy mozna zbudowac trojkat z odcinkow a, b , c.
								else System.out.println("Nie mozna.");
}//main
}//ash