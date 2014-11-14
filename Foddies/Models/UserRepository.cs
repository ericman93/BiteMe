using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Foddies.Models
{
    public static class UserRepository
    {
        private static List<User> _userList;

        static UserRepository()
        {
            #region Mocking User List
            _userList = new List<User>()
            {      
            new User { Id=1, Name="Ziv", Password="123", Email="ziv@mail.com" },
            new User { Id=2, Name="Lian", Password="123", Email="lian@mail.com" },
            new User { Id=3, Name="Eric", Password="123", Email="eric@mail.com" },
            };
            #endregion
        }

        public static User GetUserById(int userId)
        {
            return _userList.FirstOrDefault(user => user.Id == userId);
        }

        public static User GetUserByEmail(string email)
        {
            return _userList.FirstOrDefault(user => user.Email == email);
        }
        
        public static void AddUser(User newUser)
        {
            _userList.Add(newUser);
        }

    }
}