using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using MediatR;

namespace Mediator.Notification.WritePost
{
    public class WritePostNotificationConsoleHandler : INotificationHandler<WritePostNotification>
    {
        public Task Handle(WritePostNotification notification, CancellationToken cancellationToken)
        {
            Console.WriteLine(notification.WhatToWrite);

            return Task.CompletedTask;
        }
    }
}
