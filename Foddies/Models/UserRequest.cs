using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Foddies.Models
{
    public class UserRequest
    {
        public User RequestingUser { get; set; }

        public bool Accepted { get; set; }
    }
}