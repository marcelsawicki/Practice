/*
 * @(#)list4_O1_I5.java
 *
 * excercise O1 from list no. 4 (List 2, ex. I5)
 * @author: Marcel Sawicki
 * @version 1.00 2014/02/16
 */

 
public class List4_O1_I5{

public static class Liczby{
	//pola klas
	int liczba;
	int kolejna_cyfra;
	int ile;
	int max_a;
	double p;
	double k;
	boolean test;
	
	//setters
	public void ustawLiczbe(double k){
		this.k=k;
	}
	
	public void ustawIle(int ile){
		this.ile=ile;	
	}
	
	public void ustawP(double p){
		this.p=p;	
	}
	
	//getters
	public double pokazLiczbe(){
	return k;	
	}
	public boolean czyPierwsza(){

	do{
		p++;
		//System.out.println("p:="+p+" k:="+k);
	}while((k%p)!=0);
	
	
	if(p==k)
	{
		test=true;
	}
	else
	{
		if(k%p==0)
		{
			test=false;
		}
	};
	return test;	
	}
}

	public static void main(String[] args){
		
		liczby mojaLiczba = new Liczby();
		System.out.println("Uzywam metody (setters) do ustawienia wartosci liczby.");
		System.out.println("Program sprawdza czy podana liczba k jest liczb¹ pierwsza.");
		mojaLiczba.ustawLiczbe(Czytanie.czytajDouble("k="));	
		mojaLiczba.ustawP(1);
		//mojaLiczba.ustawMaxA(0);
		System.out.println("Uzywam metody (getters) do pokazania ustawionej liczby:");
		System.out.println(mojaLiczba.pokazLiczbe());
		System.out.println("*********************************************************");
		System.out.println("Czy jest to liczba pierwsza?:" +mojaLiczba.czyPierwsza());
	}; //main
}