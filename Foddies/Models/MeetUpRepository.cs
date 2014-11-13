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
                        Latitude = 32.058,
                        Longitude = 34.779
                    },
                    HostLocation = new Location
                    {
                        Latitude = 32.058,
                        Longitude = 34.779
                    },
                    MeetUpFoodType = HostType.Home,
                    Address = "יצחק רבין 14, חדרה",
                    Title = "משפחת זריהן מארחת בשישי",
                    Capacity = 3,
                    Host = new User
                    {
                        Id=1, 
                        Name="זיו", 
                        Password="123",
                        Email="ziv@mail.com"
                    },
                    IsKosher = true,
                    IsVegeterian = false
                },
                new MeetUp
                {
                    Id = 2,
                    MeetUpDate = new DateTime(2014, 11, 21, 21, 0, 0),
                    MeetUpLocation = new Location
                    {
                        Latitude = 32.045,
                        Longitude = 34.766
                    },
                    HostLocation = new Location
                    {
                        Latitude = 32.065,
                        Longitude = 34.866
                    },
                    MeetUpFoodType = HostType.Resturant,
                    Address = "הרצוג 13, תל אביב",
                    Title = "BBB",
                    Capacity = 2,
                    Host = new User()
                    {
                        Id=2, 
                        Name="ליאן",
                        Password="123", 
                        Email="lian@mail.com" 
                    },
                    IsKosher = false,
                    IsVegeterian = false,
                },
                new MeetUp
                {
                    Id = 3,
                    MeetUpDate = new DateTime(2014, 11, 20, 22, 0, 0),
                    MeetUpLocation = new Location
                    {
                        Latitude = 32.003,
                        Longitude = 34.780
                    },
                    HostLocation = new Location
                    {
                        Latitude = 32.003,
                        Longitude = 34.780
                    },
                    MeetUpFoodType = HostType.Home,
                    Address = "המסגר 14, חיפה",
                    Title = "ראש השנה אצל משפחת גולן",
                    Capacity = 3,
                    Host = new User
                    { 
                        Id=3, 
                        Name="אריק", 
                        Password="123", 
                        Email="eric@mail.com" 
                    },
                    IsKosher = true,
                    IsVegeterian = true
                }
            };

            #endregion
        }

        public static IEnumerable<MeetUp> GetAllMeetUps()
        {
            return _meetUps;
        }

        public static MeetUp GetMeetUpById(int meetUpId)
        {
            return _meetUps.FirstOrDefault(meetUp => meetUp.Id == meetUpId);
        }

        public static void AddMeetUp(MeetUp newMeetup)
        {
            _meetUps.Add(newMeetup);
        }

        public static IEnumerable<MeetUp> GetMeetUpsByHostId(int hostId)
        {
            return _meetUps.Where(meetUp => meetUp.Host.Id == hostId);
        }
    }
}