namespace UnitOfWorkApp1.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCreate1 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Department",
                c => new
                    {
                        DepartmentID = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Budget = c.Decimal(nullable: false, precision: 18, scale: 2),
                        StartDate = c.DateTime(nullable: false),
                        InstructorID = c.Int(),
                    })
                .PrimaryKey(t => t.DepartmentID)
                .ForeignKey("dbo.Instructor", t => t.InstructorID)
                .Index(t => t.InstructorID);
            
            CreateTable(
                "dbo.Instructor",
                c => new
                    {
                        InstructorID = c.Int(nullable: false, identity: true),
                        LastName = c.String(),
                        FirstMidName = c.String(),
                        HireDate = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.InstructorID);
            
            CreateTable(
                "dbo.OfficeAssignment",
                c => new
                    {
                        InstructorID = c.Int(nullable: false),
                        Location = c.String(),
                    })
                .PrimaryKey(t => t.InstructorID)
                .ForeignKey("dbo.Instructor", t => t.InstructorID)
                .Index(t => t.InstructorID);
            
            CreateTable(
                "dbo.InstructorCourse",
                c => new
                    {
                        Instructor_InstructorID = c.Int(nullable: false),
                        Course_CourseID = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.Instructor_InstructorID, t.Course_CourseID })
                .ForeignKey("dbo.Instructor", t => t.Instructor_InstructorID, cascadeDelete: true)
                .ForeignKey("dbo.Course", t => t.Course_CourseID, cascadeDelete: true)
                .Index(t => t.Instructor_InstructorID)
                .Index(t => t.Course_CourseID);
            
            AddColumn("dbo.Course", "DepartmentID", c => c.Int(nullable: false));
            CreateIndex("dbo.Course", "DepartmentID");
            AddForeignKey("dbo.Course", "DepartmentID", "dbo.Department", "DepartmentID", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Course", "DepartmentID", "dbo.Department");
            DropForeignKey("dbo.Department", "InstructorID", "dbo.Instructor");
            DropForeignKey("dbo.OfficeAssignment", "InstructorID", "dbo.Instructor");
            DropForeignKey("dbo.InstructorCourse", "Course_CourseID", "dbo.Course");
            DropForeignKey("dbo.InstructorCourse", "Instructor_InstructorID", "dbo.Instructor");
            DropIndex("dbo.InstructorCourse", new[] { "Course_CourseID" });
            DropIndex("dbo.InstructorCourse", new[] { "Instructor_InstructorID" });
            DropIndex("dbo.OfficeAssignment", new[] { "InstructorID" });
            DropIndex("dbo.Department", new[] { "InstructorID" });
            DropIndex("dbo.Course", new[] { "DepartmentID" });
            DropColumn("dbo.Course", "DepartmentID");
            DropTable("dbo.InstructorCourse");
            DropTable("dbo.OfficeAssignment");
            DropTable("dbo.Instructor");
            DropTable("dbo.Department");
        }
    }
}
