/**
 * @(#)list4_O1_I7.java
 *
 * excercise O1 from list no. 4 (List 2, ex. I7)
 * @author: Marcel Sawicki
 * @version 1.00 2014/01/17
 */

public class list4_O1_I7{

public static class Liczba{
		//zmienne
		//int a, b, c;
		//metody
		//settery
		//gettery
		
		public static int nwd(int a,int b) {
		int c;                
		while(b!=0)               
		{ 
		c=a%b;                
		a=b;             
		b=c;             
		}
		return a;                    	        
		}//nwd
	}

public static void main(String[] args) {
	liczba Moja = new Liczba();
	
	System.out.println(Moja.nwd(4,2));
} //main
}