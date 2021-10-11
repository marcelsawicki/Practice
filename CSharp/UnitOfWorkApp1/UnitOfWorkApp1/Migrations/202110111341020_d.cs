namespace UnitOfWorkApp1.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class d : DbMigration
    {
        public override void Up()
        {
            RenameTable(name: "dbo.InstructorCourse", newName: "CourseInstructor");
            RenameColumn(table: "dbo.CourseInstructor", name: "Instructor_InstructorID", newName: "InstructorID");
            RenameColumn(table: "dbo.CourseInstructor", name: "Course_CourseID", newName: "CourseID");
            RenameIndex(table: "dbo.CourseInstructor", name: "IX_Course_CourseID", newName: "IX_CourseID");
            RenameIndex(table: "dbo.CourseInstructor", name: "IX_Instructor_InstructorID", newName: "IX_InstructorID");
            DropPrimaryKey("dbo.CourseInstructor");
            AddPrimaryKey("dbo.CourseInstructor", new[] { "CourseID", "InstructorID" });
        }
        
        public override void Down()
        {
            DropPrimaryKey("dbo.CourseInstructor");
            AddPrimaryKey("dbo.CourseInstructor", new[] { "Instructor_InstructorID", "Course_CourseID" });
            RenameIndex(table: "dbo.CourseInstructor", name: "IX_InstructorID", newName: "IX_Instructor_InstructorID");
            RenameIndex(table: "dbo.CourseInstructor", name: "IX_CourseID", newName: "IX_Course_CourseID");
            RenameColumn(table: "dbo.CourseInstructor", name: "CourseID", newName: "Course_CourseID");
            RenameColumn(table: "dbo.CourseInstructor", name: "InstructorID", newName: "Instructor_InstructorID");
            RenameTable(name: "dbo.CourseInstructor", newName: "InstructorCourse");
        }
    }
}
