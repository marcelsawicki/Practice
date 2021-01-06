using System;
using System.Diagnostics;
using System.Threading.Tasks;

namespace AsyncApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            Task task = Service.Process();
            task.Wait();
        }
    }
}
