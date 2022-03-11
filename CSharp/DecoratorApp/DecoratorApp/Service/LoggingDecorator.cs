using System.Collections.Generic;

namespace DecoratorApp.Service
{
    public class LoggingDecorator : IAuthorService
    {
        private IAuthorService _authorRepository;
        public LoggingDecorator(IAuthorService authorRepository)
        {
                _authorRepository = authorRepository;
        }
        public List<string> GetAuthor()
        {
            System.Diagnostics.Debug.WriteLine("Decorator");
            List<string> authorList = _authorRepository.GetAuthor();
            authorList.Add("value3");
            authorList.Add("value4");
            return authorList;
        }
    }
}
