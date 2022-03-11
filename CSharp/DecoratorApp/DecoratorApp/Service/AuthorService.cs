using System.Collections.Generic;

namespace DecoratorApp.Service
{
    public class AuthorService : IAuthorService
    {
        public List<string> GetAuthor()
        {
            return new List<string>() { "value1", "value2", "value3" };
        }
    }
}
