
public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Hotel grand = new Hotel(2,3);
		NumerPokoju pokoj1 = new NumerPokoju();
		Osoba osoba1 = new Osoba();
		pokoj1.setPokoj(7);
		pokoj1.setPietro(7);
		pokoj1.setOsoba(osoba1);
		System.out.println("Pobrano pokoj: "+pokoj1.getPokoj());
		System.out.println("Pobrano pietro: "+pokoj1.getPietro());
	}

}
