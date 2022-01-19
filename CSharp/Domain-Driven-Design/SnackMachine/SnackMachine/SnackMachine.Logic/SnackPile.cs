using SnackMachineApp.Logic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SnackMachine.Logic
{
    public sealed class SnackPile : ValueObject<SnackPile>
    {
        public Snack Snack { get; }
        public int Quantity { get; }
        public decimal Price { get; }

        public SnackPile()
        {

        }

        public SnackPile(Snack snack, int quantity, decimal price) : this()
        {
            Snack = snack;
            Quantity = quantity;
            Price = price;
        }

        protected override bool EqualsCore(SnackPile other)
        {
            return Snack == other.Snack && Quantity == other.Quantity && Price == other.Price;
        }

        protected override int GetHashCodeCore()
        {
            unchecked 
            {
                int hashCode = Snack.GetHashCode();
                hashCode = (hashCode * 397) ^ Quantity;
                hashCode = (hashCode * 397) ^ Price.GetHashCode();
                return hashCode;
            }
        }
    }
}
