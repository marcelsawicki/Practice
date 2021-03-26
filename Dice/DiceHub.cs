using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Dice
{
    public class Roll
    {
        static Random Random = new Random();

        public string Username { get; set; }
        public DateTime Time { get; set; }
        public int DiceSize { get; set; }
        public int Value { get; set; }

        public Roll(string username, int diceSize)
        {
            Username = username;
            Time = DateTime.Now;
            DiceSize = diceSize;
            Value = Random.Next(DiceSize) + 1;
        }
    }

    public class DiceHub : Hub
    {
        static Dictionary<string, string> UsernameByClientId = new Dictionary<string, string>();
        static List<Roll> Rolls = new List<Roll>();

        bool HasUsername(out string username)
        {
            username = Context.GetHttpContext().Request.Cookies["dice_username"];
            return string.IsNullOrWhiteSpace(username) == false;
        }

        public async Task Roll(int diceSize)
        {
            if (HasUsername(out string username))
            {
                Roll roll = new Roll(username, diceSize);
                Rolls.Add(roll);
                await Clients.All.SendAsync("onRolled", roll);
            }
        }

        public async override Task OnConnectedAsync()
        {
            if (HasUsername(out string username)) 
            {
                lock (UsernameByClientId)
                {
                    if (UsernameByClientId.ContainsValue(username))
                    {
                        Clients.Caller.SendAsync("onAlert", $"Username '{username}' is already used.");
                        return;
                    }
                    else
                    {
                        UsernameByClientId[Context.ConnectionId] = username;
                    }
                }

                await Clients.Caller.SendAsync("onWelcome", UsernameByClientId.Values, Rolls);
                await Clients.All.SendAsync("onJoined", username);
            }

            await base.OnConnectedAsync();
        }

        public async override Task OnDisconnectedAsync(Exception exception)
        {
            if (UsernameByClientId.TryGetValue(Context.ConnectionId, out string username))
            {
                lock (UsernameByClientId)
                {
                    UsernameByClientId.Remove(Context.ConnectionId);
                }

                await Clients.All.SendAsync("onLeft", username);
            }

            await base.OnDisconnectedAsync(exception);
        }
    }
}
