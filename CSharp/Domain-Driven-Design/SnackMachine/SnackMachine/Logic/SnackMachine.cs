using System;

namespace Logic
{
    public sealed class SnackMachine
    {
        public int OneCentCount { get; private set; }
        public int TenCentCount { get; private set; }
        public int QuarterCount { get; private set; }
        public int OneDollarCount { get; private set; }
        public int FiveDollarCount { get; private set; }
        public int TwentyDollarCount { get; private set; }

        public int OneCentCountInTransacton { get; private set; }
        public int TenCentCountInTransacton { get; private set; }
        public int QuarterCountInTransacton { get; private set; }
        public int OneDollarCountInTransacton { get; private set; }
        public int FiveDollarCountInTransacton { get; private set; }
        public int TwentyDollarCountInTransacton { get; private set; }

        public void InsertMoney(int oneCentCount, int tenCentCount, int quarterCount, int oneDollarCount, int fiveDollarCount, int twentyDollarCount)
        {
            OneCentCountInTransacton += oneCentCount;
            TenCentCountInTransacton += tenCentCount;
            QuarterCountInTransacton += quarterCount;
            OneDollarCountInTransacton += oneDollarCount;
            FiveDollarCountInTransacton += fiveDollarCount;
            TwentyDollarCountInTransacton += twentyDollarCount;
        }

        public void ReturnMoney()
        {
            OneCentCountInTransacton = 0;
            TenCentCountInTransacton = 0;
            QuarterCountInTransacton = 0;
            OneDollarCountInTransacton = 0;
            FiveDollarCountInTransacton = 0;
            TwentyDollarCountInTransacton = 0;
        }

        public void BuySnack() 
        {
            OneCentCount += OneCentCountInTransacton;
            TenCentCount += TenCentCountInTransacton;
            QuarterCount += QuarterCountInTransacton;
            OneDollarCount += OneDollarCountInTransacton;
            FiveDollarCount += FiveDollarCountInTransacton;
            TwentyDollarCount += TwentyDollarCountInTransacton;

            OneCentCountInTransacton = 0;
            TenCentCountInTransacton = 0;
            QuarterCountInTransacton = 0;
            OneDollarCountInTransacton = 0;
            FiveDollarCountInTransacton = 0;
            TwentyDollarCountInTransacton = 0;
        }
    }

}
