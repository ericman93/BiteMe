using Foddies.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web;

namespace Foddies.Controllers
{
    public class UserController : ApiController
    {


        // GET api/<controller>/5
        public User Get(int id)
        {
            return UserRepository.GetUserById(id);
        }

        // POST api/<controller>
        public HttpResponseMessage Post([FromBody]User newUser)
        {
            UserRepository.AddUser(newUser);

            return new HttpResponseMessage { StatusCode = HttpStatusCode.OK };
        }

        // POST api/<controller>
        public HttpResponseMessage Post([FromBody]string email, [FromBody]string password)
        {
            User foundUser = UserRepository.GetUserByEmail(email);
            if(foundUser == null)
            {
                return new HttpResponseMessage { StatusCode = HttpStatusCode.NotFound };
            }
            if (foundUser.Password == password)
            {
                HttpContext.Current.Session["Id"] = foundUser.Id;
                return new HttpResponseMessage { StatusCode = HttpStatusCode.OK };                
            }
            return new HttpResponseMessage { StatusCode = HttpStatusCode.Unauthorized };            
        }
    }
}