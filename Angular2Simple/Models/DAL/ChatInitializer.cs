using Angular2Simple.Models;
using System.Collections.Generic;

namespace Models.DAL
{
    public class ChatInitializer : System.Data.Entity.DropCreateDatabaseIfModelChanges<ChatContext>
    {
        protected override void Seed(ChatContext context)
        {
            var lists = new List<List>
            {
                new List { Id=1, Name = "List1" },
                new List { Id=2, Name = "List2" },
            };

            lists.ForEach(s => context.Lists.Add(s));
            context.SaveChanges();

            var tasks = new List<Task>
            {
                new Task { Id=1, ListId=1, Name = "Task0101" },
                new Task { Id=2, ListId=1, Name = "Task0102" },
                new Task { Id=3, ListId=1, Name = "Task0103" },
                new Task { Id=4, ListId=2, Name = "Task0201" },
                new Task { Id=5, ListId=2, Name = "Task0202" },
            };

            tasks.ForEach(s => context.Tasks.Add(s));
            context.SaveChanges();

            var users = new List<User>
            {
                new User { Id=1, Username = "User1", Password = "test"},
                new User { Id=2,  Username = "User2", Password = "test"},
                new User { Id=3,  Username = "User3", Password = "test"}
            };

            users.ForEach(u => context.Users.Add(u));
            context.SaveChanges();

            var messages = new List<Message>
            {
                new Message { Id=1, Text = "Hello !", Channel= true, Sender = users[0] },
                new Message { Id=3, Text = "Yo !", Channel= true, Sender = users[1] },
                new Message { Id=3, Text = "ghruhguhz !", Channel= true,  Sender = users[2] },
                new Message { Id=4, Text = "fejzehfif !", Channel= true,  Sender = users[0] },
            };

            messages.ForEach(m => context.Messages.Add(m));
            context.SaveChanges();
        }
    }
}
