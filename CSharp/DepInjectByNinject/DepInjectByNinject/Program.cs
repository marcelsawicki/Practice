using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Ninject;

namespace DepInjectByNinject
{
    class Program
    {
        static void Main(string[] args)
        {
            IKernel kernel = new StandardKernel();
            kernel.Bind<IWeapon>().To<Sword>();
            var samurai = kernel.Get<Samurai>();
            samurai.Attack("lizard");
            Console.ReadKey();
        }
    }
}
