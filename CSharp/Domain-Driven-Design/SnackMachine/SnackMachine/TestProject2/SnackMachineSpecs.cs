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
            snackMachine.GetQuantityOfSnacksInSlot(1).Should().Be(9);
            snackMachine.GetSnackInSlot(1).Should().Be(new Snack("Some snack"));
            snackMachine.GetPriceInSlot(1).Should().Be(1m);

        }
    }
}
