/* O6. Zdefiniowaæ klasê Hotel. 
 * Ka¿dy hotel ma okreœlon¹ liczbê numerowanych pokoi rozmieszczonych  na poszczególnych piêtrach.
 * Liczba piêter i liczba pokoi na ka¿dym piêtrze jest ustawiana w momencie tworzenia obiektu. 
 * Pokój jest identyfikowany przez obiekt klasy NumerPokoju (o polach: pietro i pokoj). 
 * Okreœlony pokój jest wyjêty jeœli jest z nim powi¹zany obiekt klasy Osoba 
 * (zaproponowaæ definicjê stosownej klasy). Jedna osoba mo¿e wynajmowaæ wiele pokoi.  
 * Zdefiniowaæ metody: 
 * - czy jest jakiœ wolny pokój, 
 * - ile jest wolnych pokoi, 
 * - wynajmij dowolny z wolnych pokoi podanej (jako parametr) osobie (obiekt typu Osoba); 
 *  wynikiem powinien byæ numer przydzielonego pokoju, 
 *  
 *  - czy mo¿na wynaj¹æ k s¹siednich pokoi 
 *  (wynikiem powinien byæ numer pierwszego pokoju lub null jeœli to niemo¿liwe), 
 *  - czy osoba o podanym nazwisku wynajmuje jakiœ pokój, 
 *  - które pokoje wynajmuje osoba o podanym nazwisku 
 *  (wynikiem powinna byæ tablica numerów pokoi lub null), 
 *  - zwolnij wszystkie pokoje wynajmowane przez osobê o podanym nazwisku. 
 *  Zaproponuj ewentualne inne metody klasy Hotel
 */
public class Main {
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Hotel grand = new Hotel(2,3); // liczba pieter, liczba pokoi
		Osoba osoba1 = new Osoba("Jan", "Abcd"); // imie, nazwisko
		Osoba osoba2 = new Osoba("Mariusz", "Abcd"); // imie, nazwisko
		grand.wynajmijPokoj(1, osoba1);
		
		grand.informacjePokoj(1);
		grand.informacjePokoj(2);
		grand.informacjePokoj(3);
		
		System.out.println("\nWolne pokoje: ");
		grand.wolnePokoje();
	}

}
