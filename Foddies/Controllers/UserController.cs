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
        static List<User> UserList = new List<User>()
        {
            new User(){ Id=1, Name="Ziv", Password="123", Email="ziv@mail.com" },
            new User(){ Id=2, Name="Lian", Password="123", Email="lian@mail.com" },
            new User(){ Id=3, Name="Eric", Password="123", Email="eric@mail.com" },
        };


        // GET api/<controller>/5
        public User Get(int id)
        {
            User foundUser = UserList.First(user => user.Id == id);
            return foundUser;
        }

        // POST api/<controller>
        public HttpResponseMessage Post([FromBody]User newUser)
        {
            UserList.Add(newUser);

            HttpResponseMessage response = new HttpResponseMessage();
            response.StatusCode = HttpStatusCode.OK;
            return response;
        }

        // POST api/<controller>
        public HttpResponseMessage Post([FromBody]string email, [FromBody]string password)
        {
            HttpResponseMessage response = new HttpResponseMessage();
            response.StatusCode = HttpStatusCode.Unauthorized;

            User foundUser = UserList.FirstOrDefault(user => user.Email == email);
            if(foundUser == null)
            {
                   return response;
            }
            if (foundUser.Password == password)
            {
                HttpContext.Current.Session["Id"] = foundUser.Id;
                response.StatusCode = HttpStatusCode.OK;
            }
            return response;
        }
    }
}