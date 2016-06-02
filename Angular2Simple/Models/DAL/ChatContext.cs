using Angular2Simple.Models;
using Models;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;

namespace Models.DAL
{
    public class ChatContext : DbContext
    {
        public ChatContext() : base("ChatContext")
        {
        }

        public DbSet<List> Lists { get; set; }
        public DbSet<Task> Tasks { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Message> Messages { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();

            modelBuilder.Entity<Message>()
                        .HasOptional(m => m.Sender);
            modelBuilder.Entity<Message>()
                        .HasOptional(m => m.Recipient);
        }
    }
}
