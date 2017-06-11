/**
 * @(#)lista2_I5.java
 *
 * excercise I5 from list no. 2
 * @author: Marcel Sawicki
 * @version 1.00 2013/12/11
 */

public class lista2_I5{

public static void main(String[] args) {
	System.out.println("Program sprawdza czy podana liczba k jest liczb¹ pierwsza.");
	double k=Czytanie.czytajDouble("k=");
	double p=1;
	do{
	p++;
	System.out.println("p:="+p+" k:="+k);
	
	}while((k%p)!=0);
	
	
	if(p==k){System.out.println("TAK");}else {if(k%p==0){System.out.println("NIE");}};
	
} //main
}