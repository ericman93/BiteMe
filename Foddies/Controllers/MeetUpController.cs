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
            return Request.CreateResponse<IEnumerable<MeetUp>>(MeetUpRepository.GetMeetUpsByHostId(hostId));
        }

        [HttpGet]
        public IEnumerable<MeetUpApproveInfo> GetUsersRequests(int userId)
        {
            List<MeetUpApproveInfo> approveList = new List<MeetUpApproveInfo>();
            foreach (var meetup in MeetUpRepository.GetAllMeetUps())
            {
                foreach (var userRequest in meetup.UserRequests)
                {
                    if (userRequest.RequestingUser.Id == userId)
                    {
                        approveList.Add(new MeetUpApproveInfo { meetUp = meetup, isAccepted = userRequest.Accepted??false });
                        break;
                    }
                }
            }
            return approveList;
        }

        [HttpPut]
        public HttpResponseMessage AddUserReuqest([FromUri] int id, [FromBody]UserApproveInfo requestInfo)
        {
            MeetUp meetUp = MeetUpRepository.GetMeetUpById(id);
            if (null == meetUp)
            {
                return new HttpResponseMessage { StatusCode = HttpStatusCode.NotFound };
            }

            User user = UserRepository.GetUserById(requestInfo.RequestingUserId);
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
        public HttpResponseMessage ApproveOrDecline([FromUri] int id, [FromBody]UserApproveInfo approveInfo)
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