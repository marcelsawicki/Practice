public class Hotel {
	NumerPokoju[] pokojeHotelowe;
	
	Hotel(int liczbaPieter, int liczbaPokoi) {
		System.out.print("Buduje hotel z ");
		System.out.print("liczba pieter "+liczbaPieter);
		System.out.println(" i liczba pokoi "+liczbaPokoi);
		NumerPokoju[] pokojeHotelowe = new NumerPokoju[liczbaPokoi];
		this.pokojeHotelowe = pokojeHotelowe;
	}
	
	public int wynajmijPokoj(int nrPokoju, Osoba wynajmujacy) {
		pokojeHotelowe[nrPokoju] = new NumerPokoju(nrPokoju, wynajmujacy);
		return nrPokoju;
	}
	
	public void informacjePokoj(int nrPokoju) {
		try {
			Osoba wynajmujePokoj = pokojeHotelowe[nrPokoju].getOsoba();
			System.out.println("Pokoj nr "+nrPokoju+" wynajmuje: " +wynajmujePokoj.imie+", "+wynajmujePokoj.nazwisko);
		}
		catch(Exception e) {
			System.out.println("Pokoj nr "+nrPokoju+" jest nie wynajety.");
		}
	}
	
	public void wolnePokoje() {
		for(int k=0;k<pokojeHotelowe.length;k++) {
			if(pokojeHotelowe[k]!=null) {
				System.out.println("Pokoj " +pokojeHotelowe[k].nrPokoju+" jest wolny");
			} 
		}
	}
}
