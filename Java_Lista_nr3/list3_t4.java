/**
 * @(#)list3_t4.java
 *
 * excercise T4 (a) from list no. 3
 * @author: Marcel Sawicki
 * @version 1.00 2014/01/05
 */


public class List3_t4 {

	public static double odl(double xa, double xb, double ya, double yb){
		double dx=xa-xb;
		double dy=ya-yb;
		return Math.sqrt(dx*dx+dy*dy);
	}//odl

	public static void main(String[] args) {
		//tworze tablice dwuwymiarowa
		
		System.out.println("Ile punktow bedzie zawieral zbior P?");
		int n=(int)Czytanie.czytajDouble("n=");
		double[][] mac= new double[n][2];
		
		double maxOdl=0;
		int ktoryPkt=0;
		
		for(int h=0;h<n;h++){
			System.out.println("Punkt nr "+h);
		mac[h][0]=Czytanie.czytajDouble("x=");
		mac[h][1]=Czytanie.czytajDouble("y=");
		}//for
		
		System.out.println("Szukam punktu najbardziej odleglego od poczatku ukladu wspolrzednych XOY.");
		int j=0;
		for(int k=0;k<n;k++){
			//for(int j=0;j<2;j++){
			
			System.out.println(odl(mac[k][j],0,mac[k][j+1],0));
			if(maxOdl<odl(mac[k][j],0,mac[k][j+1],0)){maxOdl=odl(mac[k][j],0,mac[k][j+1],0); ktoryPkt=k;};
			//}
		}//for
		System.out.println("Najbardziej odlegly pkt. = " +maxOdl +"Jest to pkt. nr "+ktoryPkt);    
	}//main
}//class List3_t4