using JwtToken.App.Models;

namespace JwtToken.App
{
    public interface IUserRepository
    {
        UserDTO GetUser(UserModel userModel);
    }
}