/**
 * @(#)list3_t2_a.java
 *
 * excercise T2 (a)(b)(c) from list no. 3
 * @author: Marcel Sawicki
 * @version 1.00 2014/01/05
 */

public class List3_t2_a {

    public static void main(String[] args){
		int m=9;
		int[][] mac=new int[m][m]; //tablica nr 1
		int[][] cam=new int[m][m]; //tablica nr 2
		
		for(int i=0; i<m; i++){ //losuje elementy tablicy nr 1
			for(int j=0;j<m;j++){
			mac[j][i]=(int)Math.ceil(Math.random()*100);
			};
		};//koniec losowania elementow tablicy nr 1
		
		for(int i=0; i<m; i++){ //losuje elementy tablicy nr 2
			for(int j=0;j<m;j++){
			cam[j][i]=(int)Math.ceil(Math.random()*100);
			};
		};//koniec losowania elementow tablicy nr 2
	
		System.out.println("=======================[ Wyswietlam tablice nr 1]==========================================");
			for(int i=0; i<m; i++){ //wyswietl elementy tablicy nr 1
				for(int j=0;j<m;j++){
				System.out.print(mac[j][i]);
				if(j<m-1){System.out.print(" - ");};
				};
				
				//rysowanie tabeli
				System.out.println();
				
				for(int d=0;d<m;d++){
				System.out.print("-----");
				};
				
				System.out.println();
				
				//koniec rysowania tabeli
	}; //koniec petli wyswietlajacej elementy tablicy nr 1 oraz rysujacej tabele
	
	System.out.println("=======================[ Wyswietlam tablice nr 2]==========================================");
	for(int i=0; i<m; i++){ //wyswietl elementy tablicy nr 2
		for(int j=0;j<m;j++){
		System.out.print(cam[j][i]);
		if(j<m-1){System.out.print(" - ");};
		};
		
		//rysowanie tabeli
		System.out.println();
		
		for(int d=0;d<m;d++){
		System.out.print("-----");
		};
		
		System.out.println();
		
		//koniec rysowania tabeli
	}; //koniec petli wyswietlajacej elementy tablicy nr 2 oraz rysujacej tabele
    
    System.out.println("=======================[ Suma tablicy nr 1 i 2]==========================================");
    
    int[][] cammac=new int[m][m]; //tablica do sumowania
    
    for(int i=0; i<m; i++){ //wyswietl elementy tablicy nr 1
		for(int j=0;j<m;j++){
		cammac[j][i]=mac[j][i]+cam[j][i];
		};
    };
    
    
    for(int i=0; i<m; i++){ //wyswietl elementy tablicy do sumowania
		for(int j=0;j<m;j++){
		System.out.print(cammac[j][i]);
		if(j<m-1){System.out.print(" - ");};
		};
		
		//rysowanie tabeli
		System.out.println();
		
		for(int d=0;d<m;d++){
		System.out.print("-------");
		};
		
		System.out.println();
		
		//koniec rysowania tabeli
	}; //koniec petli wyswietlajacej elementy tablicy sumowania oraz rysujacej tabele
    
    
 System.out.println("=======================[ Iloczyn tablicy nr 1 i 2]==========================================");
    
    int[][] maccam=new int[m][m]; //tablica do sumowania
    
    for(int i=0; i<m; i++){ //wyswietl elementy tablicy nr 1
		for(int j=0;j<m;j++){
		maccam[j][i]=mac[j][i]*cam[j][i];
		};
    };
    
    
    for(int i=0; i<m; i++){ //wyswietl elementy tablicy do mnozenia
		for(int j=0;j<m;j++){
		System.out.print(maccam[j][i]);
		if(j<m-1){System.out.print(" - ");};
		};
		
		//rysowanie tabeli
		System.out.println();
		
		for(int d=0;d<m;d++){
		System.out.print("-------");
		};
		
		System.out.println();
		
		//koniec rysowania tabeli
	}; //koniec petli wyswietlajacej elementy tablicy iloczynu oraz rysujacej tabele
System.out.println("=======================[ Transponowanie tablicy nr 1 i 2]==========================================");
    
    int[][] transmac=new int[m][m]; //tablica nr 1 transpnowanie
    int[][] transcam=new int[m][m]; //tablica nr 2 transponowanie
    
    for(int i=0; i<m; i++){ //transponuj elementy tablicy nr 1
		for(int j=0;j<m;j++){
		transmac[j][i]=mac[i][j];
		};
    };
    
    for(int i=0; i<m; i++){ //transponuj elementy tablicy nr 2
		for(int j=0;j<m;j++){
		transcam[j][i]=cam[i][j];
		};
    };
    
 System.out.println("=======================[ Transponowanie tablicy nr 1]==========================================");   
    for(int i=0; i<m; i++){ //wyswietl elementy tablicy nr 1 transponowanej
		for(int j=0;j<m;j++){
		System.out.print(transcam[j][i]);
		if(j<m-1){System.out.print(" - ");};
		};
		
		//rysowanie tabeli
		System.out.println();
		
		for(int d=0;d<m;d++){
		System.out.print("-------");
		};
		
		System.out.println();
		
		//koniec rysowania tabeli
	}; //koniec petli wyswietlajacej elementy tablicy transponowanej oraz rysujacej tabele
    
    System.out.println("=======================[ Transponowanie tablicy nr 2]==========================================");   
    for(int i=0; i<m; i++){ //wyswietl elementy tablicy nr 1 transponowanej
		for(int j=0;j<m;j++){
		System.out.print(transmac[j][i]);
		if(j<m-1){System.out.print(" - ");};
		};
		
		//rysowanie tabeli
		System.out.println();
		
		for(int d=0;d<m;d++){
		System.out.print("-------");
		};
		
		System.out.println();
		
		//koniec rysowania tabeli
	}; //koniec petli wyswietlajacej elementy tablicy transponowanej oraz rysujacej tabele
    
    };
};