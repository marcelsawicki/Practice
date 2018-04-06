using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class Towar
    {

        // nazwa, cena netto, typ, ilość w magazynie
        public string nazwa;
        public float cenaNetto;
        public string typ;
        public int ilosc;

        public Towar() { }
        public Towar(string nazwa)
        {
            this.nazwa = nazwa;
        }
        public Towar(string nazwa, string typ)
        {
            this.nazwa = nazwa;
            this.typ = typ;
        }
        public Towar(string nazwa, string typ, string cenaNetto, string ilosc) 
        {
            this.nazwa = nazwa;
            this.typ = typ;

        }
        public override string ToString()
        {
            return nazwa + "\t\t|" + ilosc + "\t|" + cenaNetto + "\t\t|" + typ;
        }
    }
}
