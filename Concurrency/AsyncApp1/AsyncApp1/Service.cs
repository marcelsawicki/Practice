using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Text;
using System.Threading.Tasks;

namespace AsyncApp1
{
    public static class Service
    {
        public static async Task Process()
        {
            int val = 13;

            await Task.Delay(TimeSpan.FromSeconds(1));
            Console.WriteLine(val);

            val += 2;

            await Task.Delay(TimeSpan.FromSeconds(1));

            Console.WriteLine(val);
        }
    }
}
