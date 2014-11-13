using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Foddies.Models
{
    public static class MeetUpRepository
    {
        private static List<MeetUp> _meetUps;

        static MeetUpRepository()
        {
            #region Mocking MeetUp List

            _meetUps = new List<MeetUp>
            {
                new MeetUp
                {
                    Id = 1,
                    MeetUpDate = new DateTime(2014, 11, 20, 20, 0, 0),
                    MeetUpLocation = new Location
                    {
                        Latitude = 15.0,
                        Longitude = 30.0
                    },
                    HostLocation = new Location
                    {
                        Latitude = 45.0,
                        Longitude = 60.0
                    },
                    MeetUpFoodType = FoodType.Home,
                    Title = "משפחת זריהן מארחת בשישי",
                    Capacity = 3,
                    Host = "Dani"
                },
                new MeetUp
                {
                    Id = 2,
                    MeetUpDate = new DateTime(2014, 11, 21, 21, 0, 0),
                    MeetUpLocation = new Location
                    {
                        Latitude = 15.0,
                        Longitude = 30.0
                    },
                    HostLocation = new Location
                    {
                        Latitude = 45.0,
                        Longitude = 60.0
                    },
                    MeetUpFoodType = FoodType.Resturant,
                    Title = "BBB",
                    Capacity = 2,
                    Host = "Omer"
                },
                new MeetUp
                {
                    Id = 3,
                    MeetUpDate = new DateTime(2014, 11, 20, 22, 0, 0),
                    MeetUpLocation = new Location
                    {
                        Latitude = 15.0,
                        Longitude = 30.0
                    },
                    HostLocation = new Location
                    {
                        Latitude = 45.0,
                        Longitude = 60.0
                    },
                    MeetUpFoodType = FoodType.Home,
                    Title = "ראש השנה אצל משפחת גולן",
                    Capacity = 3,
                    Host = "Ran"
                }
            };

            #endregion
        }

        public IEnumerable<MeetUp> GetAllMeetUps()
        {
            return _meetUps;
        }

        public MeetUp GetMeetUpById(int meetUpId)
        {
            return _meetUps.FirstOrDefault(meetUp => meetUp.Id == meetUpId);
        }
    }
}