using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static SnackMachineApp.Logic.Money;

namespace SnackMachineApp.Logic
{
    public class SnackMachine : Entity
    {
        public virtual Money MoneyInside { get; protected set; }
        public virtual Money MoneyInTransaction { get; protected set; }
        public virtual IList<Slot> Slots { get; protected set; }
        public SnackMachine()
        {
            MoneyInside = None;
            MoneyInTransaction = None;
            Slots = new List<Slot>
            {
                new Slot(this, 1, null, 0, 0m),
                new Slot(this, 2, null, 0, 0m),
                new Slot(this, 3, null, 0, 0m),
            };
        }

        public virtual void InsertMoney(Money money)
        {
            MoneyInTransaction += money;
        }

        public virtual void ReturnMoney()
        {
            MoneyInTransaction = None;
        }

        public virtual void BuySnack(int position)
        {
            Slot slot = Slots.Single(x => x.Position == position);
            slot.Quantity--;
            MoneyInside += MoneyInTransaction;
            MoneyInTransaction = None;
        }

        public virtual void LoadSnacks(int position, Snack snack, int quantity, decimal price)
        {
            Slot slot = Slots.Single(x => x.Position == position);
            slot.Snack = snack;
            slot.Quantity = quantity;
            slot.Price = price;
        }

        public void BuySnack()
        {
            throw new NotImplementedException();
        }
    }
}
