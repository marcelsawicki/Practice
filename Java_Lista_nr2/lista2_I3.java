/**
 * @(#)lista2_I3.java
 *
 * excercise I3 from list no. 2
 * @author: Marcel Sawicki
 * @version 1.00 2013/12/11
 */

public class lista2I3{

	public static void main(String[] args){
		int liczba;
		int kolejna_cyfra;
		
		int ile=0;
		
		liczba=123;
		while(liczba>0){
			kolejna_cyfra=liczba % 10;
			System.out.println(kolejna_cyfra);
			liczba/=10;
			ile++;
		};
		System.out.println("Liczb znaczacych:"+ile);
	} //main
}