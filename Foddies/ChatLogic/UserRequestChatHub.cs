using Microsoft.AspNet.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace Foddies.ChatLogic
{
    public class UserRequestChatHub : Hub
    {
        private static Dictionary<string, int> _connectionIdToUserId;
        private static Dictionary<int, string> _userIdToConnectionId;

        static UserRequestChatHub()
        {
            _connectionIdToUserId = new Dictionary<string, int>();
            _userIdToConnectionId = new Dictionary<int, string>();
        }

        public void Connect(int userId)
        {
            if (_userIdToConnectionId.Keys.Contains(userId))
            {
                _connectionIdToUserId.Remove(_userIdToConnectionId[userId]);

                _connectionIdToUserId.Add(Context.ConnectionId, userId);
                _userIdToConnectionId[userId] = Context.ConnectionId;
            }
            else
            {
                _connectionIdToUserId.Add(Context.ConnectionId, userId);
                _userIdToConnectionId.Add(userId, Context.ConnectionId);
            }
        }

        public void SendMessage(int toUserId, string message)
        {
            Clients.Client(Context.ConnectionId).onReceivedMessage(message);

            if (_userIdToConnectionId.Keys.Contains(toUserId))
            {
                Clients.Client(_userIdToConnectionId[toUserId]).onReceivedMessage(message);
            }
        }
    }
}