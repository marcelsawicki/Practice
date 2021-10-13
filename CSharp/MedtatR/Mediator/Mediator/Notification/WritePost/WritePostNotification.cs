using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;

namespace Mediator.Notification.WritePost
{
    public class WritePostNotification : INotification
    {
        public string WhatToWrite { get; set; }
    }
}
