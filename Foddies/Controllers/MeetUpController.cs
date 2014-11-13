using Foddies.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Foddies.Controllers
{
    public class MeetUpController : ApiController
    {
        public IEnumerable<MeetUp> Get()
        {
            return MeetUpRepository.GetAllMeetUps();
        }

        public MeetUp Get(int id)
        {
            return MeetUpRepository.GetMeetUpById(id);
        }

        public void Post([FromBody]MeetUp newMeetUp)
        {
        }
    }
}