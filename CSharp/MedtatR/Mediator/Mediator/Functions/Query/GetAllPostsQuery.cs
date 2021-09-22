using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Mediator.Models;
using MediatR;

namespace Mediator.Functions.Query
{
    public class GetAllPostsQuery: IRequest<List<Post>>
    {
        public OrderByPostOptions OrderBy { get; set; }
    }
}
