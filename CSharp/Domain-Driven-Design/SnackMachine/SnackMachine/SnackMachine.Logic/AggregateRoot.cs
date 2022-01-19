using SnackMachineApp.Logic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SnackMachineApp.Logic
{
    public abstract class AggregateRoot : Entity
    {
        public virtual int Version { get; protected set; }
        private List<DomainEvent> _events = new List<DomainEvent>();
    }
}
