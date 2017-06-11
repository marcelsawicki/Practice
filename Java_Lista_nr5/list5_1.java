/*
 * @(#)list5_1.java
 *
 * excercise 1 from list no. 5
 * @author: Marcel Sawicki
 * @version 1.00 2014/02/20
 */
import java.io.*;
import java.util.Scanner;
public class list5_1{
	
public static void main(String[] args) throws FileNotFoundException{
	//tworze plik tekstowy o nazwie "tablica.txt"
	File plikTextowy = new File("tablica.txt");
	try {
			if (plikTextowy.createNewFile())
			System.out.println("Utworzono plik.");
			else System.out.println("Nie utworzono pliku, plik juz istnieje.");
		} catch(IOException e) {
			System.out.println("B³¹d wejœcia/wyjœcia!"); return;
		}
	//zapisuje tresc do pliku o nazwie "tablica.txt"
	
	PrintWriter zapisujeTutaj = new PrintWriter("tablica.txt");
				zapisujeTutaj.println("Macierz");
				zapisujeTutaj.println("-------");
	    		zapisujeTutaj.close();
	//odczytuje to co zapisalem w pliku "tablica.txt"
	
	File file = new File("tablica.txt");
	       Scanner in = new Scanner(file);
	  
	       String nazwa = in.nextLine();
	       System.out.println(nazwa);
	       String kreska = in.nextLine();
	       System.out.println(kreska);
	       in.close();
	
	
	}; //main
	
}//class list5_1