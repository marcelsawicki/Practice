using System;
using static Logic.Money;

namespace Logic
{
    public sealed class SnackMachine : Entity
    {
        public Money MoneyInside { get; private set; } = None;
        public Money MoneyInTransaction { get; private set; } = None;

        public void InsertMoney(Money money)
        {
            MoneyInTransaction += money;
        }

        public void ReturnMoney()
        {
            MoneyInTransaction = None;
        }

        public void BuySnack() 
        {
            MoneyInside += MoneyInTransaction;
            //MoneyInTransaction = 0
        }
    }

}
