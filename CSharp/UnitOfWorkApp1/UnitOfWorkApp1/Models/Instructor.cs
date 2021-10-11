using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace UnitOfWorkApp1.Models
{
    public class Instructor
    {
        public int InstructorID { get; set; }
        public string LastName { get; set; }

        public string FirstMidName { get; set; }

        public DateTime HireDate { get; set; }

        public string FullName
        {
            get { return LastName + ", " + FirstMidName; }
        }

        public virtual ICollection<Course> Courses { get; set; }
        public virtual OfficeAssignment OfficeAssignment { get; set; }
    }
}