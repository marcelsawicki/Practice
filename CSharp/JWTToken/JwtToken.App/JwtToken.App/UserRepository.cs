using JwtToken.App.Models;
using System.Collections.Generic;
using System.Linq;

namespace JwtToken.App
{
    public class UserRepository : IUserRepository
    {
        private readonly List<UserDTO> users = new List<UserDTO>();
        public UserRepository()
        {
            users.Add(new UserDTO { UserName = "testuser", Password = "testpassword", Role = "developer" });
            users.Add(new UserDTO { UserName = "testuser2", Password = "testpassword2", Role = "developer" });
            users.Add(new UserDTO { UserName = "admin", Password = "admin", Role = "admin" });

        }
        public UserDTO GetUser(UserModel userModel)
        {
            return users.Where(x => x.UserName.ToLower() == userModel.UserName.ToLower() && x.Password == userModel.Password).FirstOrDefault();
        }
    }
}