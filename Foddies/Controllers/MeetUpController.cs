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
    public class MeetUpController : ApiController
    {
        public IEnumerable<MeetUp> Get()
        {
            return MeetUpRepository.GetAllMeetUps();
        }

        public void Post([FromBody]MeetUp newMeetUp)
        {
            MeetUpRepository.AddMeetUp(newMeetUp);
        }

        public HttpResponseMessage Get(int hostId)
        {
            int sessionUserId = (int)HttpContext.Current.Session["Id"];

            if (hostId != sessionUserId)
            {
                return new HttpResponseMessage
                {
                    StatusCode = HttpStatusCode.Unauthorized
                };
            }

            return Request.CreateResponse<IEnumerable<MeetUp>>(MeetUpRepository.GetMeetUpsByHostId(hostId));
        }
    }
}