using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ordering.Domain.AggregatesModel.OrderAggregate
{
    class Order
    {
        private DateTime _orderDate;
        public Address Address { get; private set; }
        private int? _buyerId;

        public OrderStatus OrderStatus { get; private set; }
        private int _orderStatusId;

        private string _description;
        private int? _paymentMethodId;

        private readonly List<OrderItem> _orderItems;
        public IReadOnlyCollection<OrderItem> OrderItems => _orderItems;

        public Order(string userId, Address address, int cardTypeId, string cardNumber, string cardSecurityNumber,
                string cardHolderName, DateTime cardExpiration, int? buyerId = null, int? paymentMethodId = null)
        {
            _orderItems = new List<OrderItem>();
            _buyerId = buyerId;
            _paymentMethodId = paymentMethodId;
            _orderStatusId = OrderStatus.Submitted.Id;
            _orderDate = DateTime.UtcNow;
            Address = address;

            // ...Additional code ...
        }

        public void AddOrderItem(int productId, string productName,
                                decimal unitPrice, decimal discount,
                                string pictureUrl, int units = 1)
        {
            //...
            // Domain rules/logic for adding the OrderItem to the order
            // ...

            var orderItem = new OrderItem(productId, productName, unitPrice, discount, pictureUrl, units);

            _orderItems.Add(orderItem);

        }
        // ...
        // Additional methods with domain rules/logic related to the Order aggregate
        // ...
    }
}
