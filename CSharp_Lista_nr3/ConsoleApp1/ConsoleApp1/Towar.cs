using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class Towar
    {

        // nazwa, cena netto, typ, ilość w magazynie, cena brutto
        public string nazwa;
        public double cenaNetto;
        public string typ;
        public int ilosc;
        //  double cenaBrutto;

        // Stworzyć własność cena brutto, która w działaniu przelicza się na cenę netto
        // (ale bez tworzenie pola do ceny netto, zakładamy jedną stawkę VAT)
        public double cenaBruttoWlasnosc
        {
          get
            {
                return cenaNetto * 1.23;
            }
          set
            {
                cenaBruttoWlasnosc = cenaNetto * 1.23;
            }
    }

        // konstruktor0
        public Towar()
        {

        }

        // konstruktor1
        public Towar(string nazwa)
        {
            this.nazwa = nazwa;
        }

        // konstruktor2 + inicjalizator konstruktora1
        public Towar(string nazwa, string typ, double cenaNetto, int ilosc):this(nazwa)  
        {
            this.typ = typ;
            this.cenaNetto = cenaNetto;
            this.ilosc = ilosc;
        }
        public override string ToString()
        {
            string komunikat;
            komunikat = "Nazwa: " + nazwa + ", Ilosc: " + ilosc + ", Cena netto: ";
            komunikat += cenaNetto + " zl, Typ: " + typ + ", Cena brutto: " + this.cenaBruttoWlasnosc +" zl \n";
            return komunikat;
        }

        public void swap(ref int liczbaA, ref int liczbaB)
        {
            System.Console.WriteLine("Metoda swap - zamiana liczb.");

            int zmiennaPomocnicza = liczbaB;
            liczbaB = liczbaA;
            liczbaA = zmiennaPomocnicza;
        }

        public void average(params double[] tab)
        {
            double suma=0;
            int ilosc=0;
            double srednia=0;
            System.Console.WriteLine("Metoda average - obliczanie sredniej.");

            for (int k = 0; k < tab.Length; k++)
            {
                System.Console.Write(tab[k]+"; ");
                suma = suma + tab[k];
                ilosc++;
            }
            
            srednia = suma / ilosc;
            System.Console.WriteLine("\nSrednia z liczb przekazanych do metody average: " + srednia.ToString());
        }
    }
}
