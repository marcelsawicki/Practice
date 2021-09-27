using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ordering.Domain.AggregatesModel.OrderAggregate
{
    class OrderItem
    {
        public OrderItem(int productId, string productName, decimal unitPrice, decimal discount, string pictureUrl, int units)
        {
            ProductId = productId;
            ProductName = productName;
            UnitPrice = unitPrice;
            Discount = discount;
            PictureUrl = pictureUrl;
            Units = units;
        }

        public int ProductId { get; }
        public string ProductName { get; }
        public decimal UnitPrice { get; }
        public decimal Discount { get; }
        public string PictureUrl { get; }
        public int Units { get; }
    }
}
