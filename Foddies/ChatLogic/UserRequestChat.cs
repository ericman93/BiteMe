using Microsoft.AspNet.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace Foddies.ChatLogic
{
    public class UserRequestChat : Hub
    {
        Dictionary<string, int> _connectionIdToUserId;
        Dictionary<int, string> _userIdToConnectionId;

        public UserRequestChat()
        {
            _connectionIdToUserId = new Dictionary<string, int>();
            _userIdToConnectionId = new Dictionary<int, string>();
        }

        public void SendMessage(int fromUserId, int toUserId, string message)
        {
            //If this is the user's first connection, then we save his connection id in our dictionary,
            //mapped to his user id.
            if (!_connectionIdToUserId.Keys.Contains(Context.ConnectionId))
            {
                _connectionIdToUserId.Add(Context.ConnectionId, fromUserId);
            }

            //If toUserId already connected, we get his connection id from our dictionary,
            //and will send the message only to him.
            if (_userIdToConnectionId.Keys.Contains(toUserId))
            {
                Clients.Client(_userIdToConnectionId[toUserId]).sendMessage(message);

                //Sending the caller the message he sent himself, so he can be certain it was sent.
                Clients.Caller.sendMessage(message);
            }
        }
    }
}