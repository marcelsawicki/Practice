﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SnackMachineApp.Logic
{
    public static class Initer
    {
        public static void Init(string connectionString)
        {
            SessionFactory.Init(connectionString);
        }
    }
}
