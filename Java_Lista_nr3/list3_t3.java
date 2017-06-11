/**
 * @(#)list3_t2_a.java
 *
 * excercise T3 (F1-F3)and (F5-F8) from list no. 3
 * @author: Marcel Sawicki
 * @version 1.00 2014/01/05
 */


public class list3_t3 {

    public static void main(String[] args) {
    	
    	//definiuje tablice wspolczynnikow wielomianu
    	System.out.println("========================[Czesc F1]============================================");
    	int n;

    	System.out.println("Podaj stopien wielomianu:");
    	n=(int)Czytanie.czytajDouble("n=");
    	int[] a=new int[n+1];
    	
    	System.out.println("Podaj wspolczynniki wielomianu:");
    	
    	for(int k=0;k<=n;k++){
    	a[k]=(int)Czytanie.czytajDouble("a"+k+" =");	
    	};//for
    	
    	System.out.println("========================[Wypisanie wielomianu]============================================");
    	System.out.print("w(x)= ");
    	int h=n; //zmienna pomocnicza
    	for(int d=0;d<=n;d++){
    		if(h!=0){
    		System.out.print(a[d]+"*x^("+h+") + ");
    		h--;
    		}else{ System.out.print(a[d]);};//else
    	};//for
    	System.out.println();
    	System.out.println("========================[Czesc F2]=======================================================");
    	System.out.println("Podaj x:");
    	int x=(int)Czytanie.czytajDouble("x=");
    	
    	System.out.println("========================[Czesc F3: Obliczenie wartosci wielomianu dla podanego x]========");
    	//obliczam wielomian dla x
    	int w=0;
    	int ds=n; //zmienna pomocnicza
    	for(int j=0;j<=n;j++){
    		if(ds!=0){
    			w+=a[j]*(int)Math.pow(x,ds);
    		//System.out.print(a[j]+"*x^("+ds+") + ");
    		ds--;
    		}else{ w+=a[j];};//else

    		
    	};//for
    	System.out.println();
    	System.out.println("w("+x+")= "+w);
    }//main
    
    
}//koniec klasy list3_t3