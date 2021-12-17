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

        public void InsertMoney(int oneCentCount, int tenCentCount, int quarterCount, int oneDollarCount, int fiveDollarCount, int twentyDollarCount)
        {
            OneCentCount += oneCentCount;
            TenCentCount += tenCentCount;
            QuarterCount += quarterCount;
            OneDollarCount += oneDollarCount;
            FiveDollarCount += fiveDollarCount;
            TwentyDollarCount += twentyDollarCount;
        }
    }

}
