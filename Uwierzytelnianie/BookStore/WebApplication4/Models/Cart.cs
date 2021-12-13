using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApplication4.DAL;

namespace WebApplication4.Models
{
    public class Cart
    {
        public Cart()
        {
            var BooksCollection = new List<Books>();
        }
        public List<Books> BooksCollection { get; set; }
    }
}