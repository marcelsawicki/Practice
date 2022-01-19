using SnackMachineApp.Logic;
using SnackMachineApp.Logic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SnackMachineApp.Logic
{
    public class Slot : Entity
    {
        public virtual SnackMachine SnackMachine { get; set; }
        public virtual int Position { get; set; }

        public Slot()
        {
        }

        public Slot(SnackMachine snackMachine, int position, Snack snack, int quantity, decimal price) : this()
        {
            SnackMachine = snackMachine;
            Position = position;
            Snack = snack;
            Quantity = quantity;
            Price = price;
        }
    }
}
