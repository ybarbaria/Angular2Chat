using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Angular2Simple.Models
{
    public class Message
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity), Key]
        public int Id { get; set; }
        public string Text { get; set; }
        public User Recipient { get; set; }
        public User Sender { get; set; }
        public bool Channel { get; set; }
    }
}