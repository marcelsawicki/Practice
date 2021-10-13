using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using MediatR;

namespace Mediator.Notification.WritePost
{
    public class WritePostNotificationDebugerHandler : INotificationHandler<WritePostNotification>

    {
        public Task Handle(WritePostNotification notification, CancellationToken cancellationToken)
        {
            Debugger.Log(1, "Info", notification.WhatToWrite);
            return Task.CompletedTask;
        }
    }
}
