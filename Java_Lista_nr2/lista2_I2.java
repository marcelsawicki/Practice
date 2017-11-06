/**
 * @(#)lista2_I2.java
 *
 * excercise I2 from list no. 2
 * @author: Marcel Sawicki
 * @version 1.00 2013/12/11
 */

public class Lista2_I2{

	public static void main(String[] args){
		int liczba;
		int kolejna_cyfra;
		
		int ile=0;
		
		liczba=1234567890;
		while(liczba>0){
			kolejna_cyfra=liczba % 10;
			System.out.println(kolejna_cyfra);
			liczba/=10;
			ile=ile+kolejna_cyfra;
		};
		System.out.println("Suma cyfr:"+ile);
	} //main
}