/**
 * @(#)pine.java
 *
 * excercise D3 from list no. 1
 * @author: Marcel Sawicki
 * @version 1.20 2013/11/11
 */
 
public class Pine{
	
	public static void main(String[] args){
		double a=Czytanie.czytajDouble("a=");
		double b=Czytanie.czytajDouble("b=");
		double c=Czytanie.czytajDouble("c=");
		System.out.println("Podano: "+a+", "+b+", "+c);
		System.out.println("Podane liczby uporzadkowane rosnaco:");
		int n=3;
		for(int i=0;i<=n-1;i++){
			if(a>b)
			{
				double k=b;
				b=a;
				a=k;
			};
		}; 
	System.out.println("Sortowanie: "+a+", "+b+", "+c);
	}// main
}// Pine