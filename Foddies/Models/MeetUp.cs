using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Foddies.Models
{
    public class MeetUp
    {
        public int Id { get; set; }

        public User Host { get; set; } 

        public Location MeetUpLocation { get; set; }

        public Location HostLocation { get; set; }

        public HostType MeetUpFoodType { get; set; }

        public string Address { get; set; }
        
        public int Capacity { get; set; }

        public string Title { get; set; }

        public bool IsKosher { get; set; }

        public bool IsVegeterian { get; set; }

        public DateTime MeetUpDate { get; set; }

        public List<UserRequest> UserRequests { get; set; }
    }
}