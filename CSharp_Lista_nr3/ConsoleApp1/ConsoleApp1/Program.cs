using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    
        class Program
    {
        static void Main(string[] args)
        {
            Towar towar = new Towar();

            Towar towar1 = new Towar("Woda") { nazwa = "Woda", ilosc = 2, cenaNetto = 2, typ = "Napoj" };
            Towar towar2 = new Towar("Sok") { nazwa = "Sok", ilosc = 3, cenaNetto = 22, typ = "Napoj" };
            System.Console.WriteLine(towar1);
            System.Console.WriteLine(towar2);
            System.Console.ReadLine();
        }
    }
}
