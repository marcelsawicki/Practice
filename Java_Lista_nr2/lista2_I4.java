/**
 * @(#)lista2_I4.java
 *
 * excercise I4 from list no. 2
 * @author: Marcel Sawicki
 * @version 1.00 2013/12/11
 */

public class lista2_I4{
	
public static void main(String[] args){
	int liczba;
	int kolejna_cyfra;
	int max_a=0;
	liczba=123987688;
	while(liczba>0){
    	kolejna_cyfra=liczba % 10;
    	if(kolejna_cyfra>max_a){max_a=kolejna_cyfra;};

    	System.out.println(kolejna_cyfra);
    	liczba/=10;
    };
    
    System.out.println("*********************************************************");
    System.out.println("najwieksza cyfra to:" +max_a);
    
} //main
}