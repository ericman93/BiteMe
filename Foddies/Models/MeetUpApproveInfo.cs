using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Foddies.Models
{
    public class MeetUpApproveInfo
    {
        public int RequestingUserId { get; set; }

        public bool isAccepted { get; set; }
    }
}