// Źródło: Komputer Expert 4/2003(5)

public class ClockShield 
{
	int sizeX; // szerokosc apletu
	int sizeY; // wysokosc apletu
	int r; // promien tarczy zegara
	int centerX; // wspolrzedna X srodka tarczy zegara
	int centerY; // wspolrzedna Y srodka tarczy zegara
	
	Color clockColor; // kolor tarczy zegara
	boolean stopped; // kontrola stanu watku
	
	double hour; // aktualna godzina
	double minute; // aktualna minuta
	double second; // aktualna sekunda
	
	Graphics mDC; // kontekst urzadzenia
	Graphics gDC; // konteks urzadzenia
	Image img; // bufor obrazu
	
	Thread thread; // watek rysujacy zegar
	
	public void init()
	{
		sizeX = getSize().width;
		sizeY = getSize().height;
		
		img = createImage(sizeX, sizeY);
		mDC = img.getGraphics();
		gDC = getGraphics();
		
		centerX = sizeX / 2;
		centerY = sizeY / 2;
		
		if(sizeX < sizeY)
		{
			sizeY = sizeX;
		}
		else if(sizeX > sizeY)
		{
			sizeX = sizeY;
		}
		
		r = sizeX / 2;
		clockColor = Color.yellow;
		stopped = false;
	}
	
	
	public void drawDigits(Graphics gDC)
	{
		gDC.setColor(Color.black);
		
		for(int i=1; i <= 12; i++)
		{
			int digitWidth = gDC.getFontMetrics().strongWidth(Integer.toString(i));
			int digitHeight = gdc.getFontMetrics().getHeight();
			int x = (int) (centerX + (r - digitHeight) * Math.cos(Math.PI / 6 * (i - 3)));
			int y = (int) (centerY + (r - digitHeight) * Math.sin(Math.PI / 6 * (i - 3)));
			x -= digitWidth / 2;
			y += digitHeight / 2;
			gDC.drawString(Integer.toString(i), x, y);
		}
	}
	
	public void drawHands(Graphics gDC)
	{
		double hVal = hour * 60 + minute;
		int xH = (int) (centerX + (r * 0.6) * Math.cos(Math.PI/360 * (hVal - 180)));
		int yH = (int) (centerX + (r * 0.6) * Math.sin(Math.PI/360 * (hVal - 180)));
		
		int xM = (int) (centerX + (r * 0.65) * Math.cos(Math.PI / 30 * (minute - 15)));
		int yM = (int) (centerY + (r * 0.65) * Math.sin(Math.PI / 30 * (minute - 15)));
		
		int xS = (int) (centerX + (r * 0.7) * Math.cos(Math.PI / 30 * (second - 15)));
		int yS = (int) (centerY + (r * 0.7) * Math.sin(Math.PI / 30 * (second - 15)));
		
		gDC.setColor(Color.red);
		gDC.drawLine(centerX, centerY, xH, yH);
		gDC.drawLine(centerX - 1 , centerY - 1, xH, yH);
		gDC.drawLine(centerX + 1 , centerY + 1, xH, yH);
		
		gDC.setColor(Color.green);
		gDC.drawLine(centerX, centerY, xM, yM);
		gDC.drawLine(centerX - 1 , centerY - 1, xM, yM);
		gDC.drawLine(centerX + 1 , centerY + 1, xM, yM);
		
		gDC.setColor(Color.blue);
		gDC.drawLine(centerX, centerY, xS, yS);
	}
	
	public void draw()
	{
		mDC.setColor(Color.white);
		mDC.fillRect(0, 0, getSize().width, getSize().height);
		mDC.setColor(clockColor);
		mDC.fillOval(centerX - sizeX / 2, centerY - sizeY / 2, sizeX, sizeY);
		
		getTime();
		drawDigits(mDC);
		drawHands(mDC);
		
		gDC.drawImage(img, 0, 0, null);
	}
	
	public void getTime()
	{
		GregorianCalendar calendar = new GregorianCalendar();
		hour = calendar.get(Calendar.HOUR);
		minut = calendar.get(Calendar.MINUTE);
		second = calendar.get(Calendar.SECOND);
	}
}