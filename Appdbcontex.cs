using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.ConstrainedExecution;
using System.Text;
using System.Threading.Tasks;
using Microsoft;

using Microsoft.EntityFrameworkCore;

namespace driveCom
{
    public class AppDBContext : DbContext
    {
        public DbSet<Cabin> Cabins { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite(@"Data Source=D:\Semester 3\EC3404 GUI Programming\GUI project(Resort Management System)\New folder\Desktop App\DesktopApp\DesktopApp\database\cabinData.db");
        }
    }


}