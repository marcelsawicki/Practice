using FluentAssertions;
using SnackMachineApp.Logic;
using System;
using System.Linq;
using Xunit;

namespace TestProject2
{
    public class SnackMachineSpecs
    {
        [Fact]
        public void Test1()
        {
            var snackMachine = new SnackMachine();
            snackMachine.LoadSnacks(1, new Snack("Some snack"), 10, 1m);
            snackMachine.InsertMoney(Money.Dollar);

            snackMachine.BuySnack(1);

            snackMachine.MoneyInTransaction.Should().Be(Money.None);
            snackMachine.MoneyInside.Amount.Should().Be(1m);
            snackMachine.Slots.Single(x => x.Position == 1).Quantity.Should().Be(9);

        }
    }
}
