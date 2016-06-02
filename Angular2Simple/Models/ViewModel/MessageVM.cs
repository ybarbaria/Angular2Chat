using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Angular2Simple.Models.ViewModel
{
    public class MessageVM
    {
        public bool Channel { get; set; }
        public string Recipient { get; set; }
        public string Sender { get; set; }
        public string Text { get; set; }
    }
}