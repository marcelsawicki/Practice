using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using System.Data.Entity.SqlServer;

namespace ContosoTeamStats.Models
{
    public class TeamContext: DbContext
    {
        public TeamContext()
    : base("TeamContext")
        {
        }

        public DbSet<Team> Teams { get; set; }
    }
}
