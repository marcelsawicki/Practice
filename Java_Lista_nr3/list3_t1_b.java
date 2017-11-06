/**
 * @(#)list3_t1_b.java
 *
 * excercise T1 (b)from list no. 3
 * @author: Marcel Sawicki
 * @version 1.00 2013/12/17
 */

public class Lista3T1b {

	public static void main(String[] args){
		
		int n=5;
		int[] ciag=new int[n];

		for(int k=0; k<n; k++){
			ciag[k]=(int)Math.ceil(Math.random()*100);
		};
		
		for(int k=0; k<n; k++){
			System.out.println(ciag[k]+" - ciag["+k+"]");
		};
		
		System.out.println("==================================================================");
		
		for(int k=n; k<n; k--){
			System.out.println(ciag[k]+" - ciag["+k+"]");
		};
		
		System.out.println("============[Dziele na podciagi]=================================");
		
		int[] podciag1=new int[n];
		int[] podciag2=new int[n];
		
		//zerowanie podciagow
			for(int k=0; k<n; k++){
			podciag1[k]=0;
			podciag2[k]=0;
		};
		
		//podzielenie ciagu na podciagi parzyste, nieparzyste
		for(int k=0; k<n; k++){
			if(ciag[k]%2!=0){podciag1[k]=ciag[k];}else{podciag2[k]=ciag[k];};
		};
		
		System.out.println("============[Wyswietl podciagi]=================================");	
		for(int k=0; k<n; k++){
			System.out.println(podciag1[k]+" - podciag1["+k+"]");
		};
		
		for(int k=0; k<n; k++){
			System.out.println(podciag2[k]+" - podciag2["+k+"]");
		};
		
	};
}; 