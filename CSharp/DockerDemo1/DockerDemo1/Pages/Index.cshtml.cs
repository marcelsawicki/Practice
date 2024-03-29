﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DockerDemo1.Pages
{
    public class IndexModel : PageModel
    {
        private readonly ILogger<IndexModel> _logger;

        public IndexModel(ILogger<IndexModel> logger)
        {
            _logger = logger;
        }
        public async Task OnGet()
        {
            ViewData["Message"] = "Hello from webfrontend";

            using (var client = new System.Net.Http.HttpClient())
            {
                //// Call *mywebapi*, and display its response in the page
                //var request = new System.Net.Http.HttpRequestMessage();
                ////request.RequestUri = new Uri("http://localhost:49846/weatherforecast");
                //request.RequestUri = new Uri("http://webapplication1/api/values/1"); // For ASP.NET 2.x, comment out previous line and uncomment this line.
                //var response = await client.SendAsync(request);
                //ViewData["Message"] += " and " + await response.Content.ReadAsStringAsync();
            }
        }
    }
}
