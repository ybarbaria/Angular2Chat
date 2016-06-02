using Angular2Simple.Models;
using Angular2Simple.Models.ViewModel;
using AutoMapper;
using Models.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace Angular2Simple.Controllers
{
    public class MessageController : ApiController
    {
        private readonly Repository _repository;

        public MessageController()
        {
            this._repository = new Repository();
        }

        [HttpGet]
        public IHttpActionResult GetList()
        {
            List<Message> result = new List<Message>();
            result = this._repository.Entity<Message>().Where(m=> m.Channel).ToList();
            MessageVM msgVM;
            List<MessageVM> messagesVM = new List<MessageVM>();
            foreach (Message ms in result)
            {
                msgVM = new MessageVM() { Text = ms.Text };
                messagesVM.Add(msgVM);
            }

            // IEnumerable<MessageVM> _messagesVM = Mapper.Map<IEnumerable<Message>, IEnumerable<MessageVM>>(result);


            return Json(messagesVM);
        }
    }
}