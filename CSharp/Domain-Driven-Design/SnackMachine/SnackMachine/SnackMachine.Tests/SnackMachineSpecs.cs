using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;
using SnackMachineApp.Logic;
using FluentAssertions;

namespace SnackMachineApp.Tests
{
    public class SnackMachineSpecs
    {
        [Fact]
        public void BuySnack_trades_inserted_money_for_a_snack()
        {
            var snackMachine = new SnackMachine();
            snackMachine.LoadSnacks(1, new Snack("Some snack"), 10, 1m);
            snackMachine.InsertMoney(Money.Dollar);

            snackMachine.BuySnack(1);

            snackMachine.MoneyInTransaction.Should().Be(Money.None);
            snackMachine.MoneyInside.Amount.Should().Be(2m);
            snackMachine.Slots.Single(x => x.Position == 1).Quantity.Should().Be(9);
        }
    }
}
