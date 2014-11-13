using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Foddies.Models
{
    public class UserRequest
    {
        public User RequestingUser { get; set; }

        // null means that the offer is pending
        public bool? Accepted { get; set; }
    }
}