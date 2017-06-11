/**
 * @(#)list4_O1_I8.java
 *
 * excercise O1 from list no. 4 (List 2, ex. I8)
 * @author: Marcel Sawicki
 * @version 1.00 2014/01/17
 */

public class list4_O1_I8{

public static class liczba{
	//zmienne
	//int a, b, c;
	//metody
	//settery
	//gettery
	
	public static int nwd(int a,int b) {
	int c;
                  
	while(a!=b)                
	{ 

	if(a>b){a=a-b;
	}else{b=b-a;
	};                    
	}//while

	return a;                          
                 	        
	}//nwd
	}

public static void main(String[] args) {
	liczba Moja = new liczba();
	
	System.out.println(Moja.nwd(8,2));
} //main
}