using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Foddies.Models
{
    public class MeetUp
    {
        public int Id { get; set; }

        public string Host { get; set; } //TODO: string replace with User.

        public Location MeetUpLocation { get; set; }

        public Location HostLocation { get; set; }

        public FoodType MeetUpFoodType { get; set; }

        public int Capacity { get; set; }

        public string Title { get; set; }

        public DateTime MeetUpDate { get; set; }
    }
}