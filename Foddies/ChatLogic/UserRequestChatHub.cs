using Foddies.Models;
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
        private static Dictionary<int, User> _userIdToUser;

        static UserRequestChatHub()
        {
            _connectionIdToUserId = new Dictionary<string, int>();
            _userIdToConnectionId = new Dictionary<int, string>();

            _userIdToUser = new Dictionary<int, User>();
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

                _userIdToUser.Add(userId, UserRepository.GetUserById(userId));
            }
        }

        public void SendMessage(int toUserId, string message)
        {
            string formattedMessage = string.Format("{0}: {1}", _userIdToUser[_connectionIdToUserId[Context.ConnectionId]].Name, message);

            Clients.Client(Context.ConnectionId).onReceivedMessage(formattedMessage);

            if (_userIdToConnectionId.Keys.Contains(toUserId))
            {
                Clients.Client(_userIdToConnectionId[toUserId]).onReceivedMessage(formattedMessage);
            }
        }
    }
}