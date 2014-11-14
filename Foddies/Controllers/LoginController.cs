using Foddies.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace Foddies.Controllers
{
    public class LoginController : ApiController
    {
        public bool Post([FromBody]User user)
        {
            return true;
        }
    }
}