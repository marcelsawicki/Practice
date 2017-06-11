/**
 * @(#)list3_t2_a.java
 *
 * excercise T3 (F4) (F7) (F8) from list no. 3
 * @author: Marcel Sawicki
 * @version 1.00 2014/01/05
 */


public class list3_t3_F4 {

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
    	System.out.println("========================[Czesc F4: obliczenie pochodnej wielomianu v(x)=w'(x)]=======================================================");
       	System.out.println("========================[wyznaczenie wspolczynnikow wielomianu v(x)=w'(x)	 ]=======================================================");
       	System.out.print("v(x)= w'(x)= ");
    	//wspolczynniki wielomianu v(x)
    	int[] av=new int[n+1];
    	
    	int g=n; //zmienna pomocnicza
    	for(int d=0;d<=n;d++){
    		if(g>1){
    		System.out.print(a[d]+"*"+g+"*x^("+(g-1)+") + ");
    		av[d]=a[d]*g;
    		g--;
    		}else{ if(g==1){System.out.print(a[d]+"*1");av[d]=a[d]*g; g--;}else{System.out.print(" + 0");av[d]=0;};
    		
    				};//else
    	};//for
    	System.out.println();
    }//main
    
    
}//koniec klasy list3_t3_F4