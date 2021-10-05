using Ordering.Domain.SeedWork;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ordering.Domain.AggregatesModel.OrderAggregate
{
    // Defined at IOrderRepository.cs
    public interface IOrderRepository : IRepository<Order>
    {
        public Order Add(Order order);

        public void Update(Order order);

        public Task<Order> GetAsync(int orderId);
    }
}
