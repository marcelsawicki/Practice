using SnackMachine.Logic;
using SnackMachineApp.Logic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SnackMachineApp.Logic
{
    public class Snack : AggregateRoot
    {
        public virtual string Name { get; protected set; }

        protected Snack()
        { 
        }

        public Snack(string name) : this()
        {
            Name = name;
        }
    }
}
