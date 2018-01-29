
public class NumerPokoju {
	int pietro;
	int pokoj;
	Osoba wynajmujacy;
	
	// setter
	void setPokoj(int pokoj) {
		this.pokoj = pokoj;
	}
	
	void setPietro(int pietro) {
		this.pietro = pietro;
	}
	
	void setOsoba(Osoba wynajmujacy) {
		this.wynajmujacy = wynajmujacy;
	}
	// getter
	int getPokoj() {
		return this.pokoj;
	}
	
	int getPietro() {
		return this.pietro;
	}
	
	Osoba getOsoba() {
		return this.wynajmujacy;
	}
}
