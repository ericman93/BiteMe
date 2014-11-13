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
        [HttpGet]
        public IEnumerable<MeetUp> Get()
        {
            return MeetUpRepository.GetAllMeetUps();
        }

        [HttpGet]
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

        [HttpPut]
        public HttpResponseMessage AddUserReuqest([FromUri] int id, [FromBody]int MeetUpId)
        {
            MeetUp meetUp = MeetUpRepository.GetMeetUpById(MeetUpId);
            if (null == meetUp)
            {
                return new HttpResponseMessage { StatusCode = HttpStatusCode.NotFound };
            }

            User user = UserRepository.GetUserById(id);
            if (null == user)
            {
                return new HttpResponseMessage { StatusCode = HttpStatusCode.NotFound };
            }

            // request pending
            UserRequest request = new UserRequest { Accepted = null, RequestingUser = user };
            meetUp.UserRequests.Add(request);

            return new HttpResponseMessage { StatusCode = HttpStatusCode.OK };
        }

        [HttpPost]
        public HttpResponseMessage Create([FromBody]MeetUp newMeetUp)
        {
            MeetUpRepository.AddMeetUp(newMeetUp);
            return new HttpResponseMessage { StatusCode = HttpStatusCode.OK };
        }

        [HttpPatch]
        public HttpResponseMessage ApproveOrDecline([FromUri] int id, [FromBody]MeetUpApproveInfo approveInfo)
        {
            MeetUp meetUp = MeetUpRepository.GetMeetUpById(id);
            if (null == meetUp)
            {
                return new HttpResponseMessage { StatusCode = HttpStatusCode.NotFound };
            }
            UserRequest userRequest = meetUp.UserRequests.FirstOrDefault(request => request.RequestingUser.Id == id);
            if (null == userRequest)
            {
                return new HttpResponseMessage { StatusCode = HttpStatusCode.NotFound };
            }
            userRequest.Accepted = approveInfo.isAccepted;

            return new HttpResponseMessage { StatusCode = HttpStatusCode.OK };
        }

    }
}