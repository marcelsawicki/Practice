using Mediator.Functions.Command;
using Mediator.Functions.Query;
using Mediator.Models;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mediator.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PostController : ControllerBase
    {
        private readonly IMediator _mediator;
        public PostController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet(Name = "GetAllPosts")]
        public async Task<ActionResult<List<Post>>> GetAllPosts()
        {
            var request = new GetAllPostsQuery { OrderBy = OrderByPostOptions.ByDate };
            var result = await _mediator.Send(request);
            return result;
        }

        [HttpPut(Name = "UpdatePost")]
        public async Task<ActionResult> Update([FromBody] UpdatePostCommand updatePostCommand)
        {
            await _mediator.Send(updatePostCommand);

            return NoContent();
        }
    }
}
