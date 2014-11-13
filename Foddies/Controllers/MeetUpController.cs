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

        public HttpResponseMessage Post([FromBody]MeetUp newMeetUp)
        {
            MeetUpRepository.AddMeetUp(newMeetUp);
            return new HttpResponseMessage { StatusCode = HttpStatusCode.OK };
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

        // Adding a user request for a meetup
        public HttpResponseMessage Post([FromBody]int MeetUpId, [FromBody]int RequestingUserId)
        {
            MeetUp meetUp = MeetUpRepository.GetMeetUpById(MeetUpId);
            if (null == meetUp)
            {
                return new HttpResponseMessage { StatusCode = HttpStatusCode.NotFound };
            }

            User user = UserRepository.GetUserById(RequestingUserId);
            if (null == user)
            {
                return new HttpResponseMessage { StatusCode = HttpStatusCode.NotFound };
            }

            // request pending
            UserRequest request = new UserRequest { Accepted = null, RequestingUser = user };
            meetUp.UserRequests.Add(request);
            
            return new HttpResponseMessage { StatusCode = HttpStatusCode.OK };
        }

        // Decline or accepting a user request to a meetup
        public HttpResponseMessage Post([FromBody]int MeetUpId, [FromBody]int RequestingUserId, [FromBody]bool? isAccepted)
        {
            MeetUp meetUp = MeetUpRepository.GetMeetUpById(MeetUpId);
            if (null == meetUp)
            {
                return new HttpResponseMessage { StatusCode = HttpStatusCode.NotFound };
            }
            UserRequest userRequest = meetUp.UserRequests.FirstOrDefault(request => request.RequestingUser.Id == RequestingUserId);
            if (null == userRequest)
            {
                return new HttpResponseMessage { StatusCode = HttpStatusCode.NotFound };
            }
            userRequest.Accepted = isAccepted;

            return new HttpResponseMessage { StatusCode = HttpStatusCode.OK };
        }

    }
}