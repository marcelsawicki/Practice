﻿using Mediator.Functions.Command;
using Mediator.Notification;
using Mediator.Functions.Query;
using Mediator.Models;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Mediator.Notification.WritePost;

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

        [HttpGet(Name = "GetAllPosts", Order = 1)]
        //[Route("getallposts")]
        public async Task<ActionResult<List<Post>>> GetAllPosts()
        {
            var request = new GetAllPostsQuery { OrderBy = OrderByPostOptions.ByDate };
            var result = await _mediator.Send(request);
            return result;
        }
        [HttpGet("{message}", Name = "WritePost")]
        //[Route("writepost")]
        public async Task<ActionResult> WritePost(string message)
        {
            await _mediator.
                Publish(new WritePostNotification()
                {
                    WhatToWrite = message
                });

            return NoContent();
        }

        [HttpPut(Name = "UpdatePost")]
        public async Task<ActionResult> Update([FromBody] UpdatePostCommand updatePostCommand)
        {
            await _mediator.Send(updatePostCommand);

            return NoContent();
        }
    }
}
