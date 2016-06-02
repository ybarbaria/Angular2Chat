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
            result = this._repository.Entity<Message>().Where(m => m.Channel).ToList();
            MessageVM msgVM;
            List<MessageVM> messagesVM = new List<MessageVM>();
            foreach (Message ms in result)
            {
                msgVM = new MessageVM() { Text = ms.Text, Sender = ms.Sender.Username };
                messagesVM.Add(msgVM);
            }

            return Json(messagesVM);
        }

        [HttpPost]
        public IHttpActionResult Send(MessageVM mess)
        {
            GenericResult result;
            User user = this._repository.Entity<User>().Where(u => u.Username == mess.Sender).FirstOrDefault();
            Message messToAdd = new Message() { Sender = user, Channel = mess.Channel, Text = mess.Text };

            this._repository.Insert(messToAdd);
            bool saveOk = this._repository.Save();

            if (saveOk)
            {
                result = new GenericResult()
                {
                    Succeeded = true,
                    Message = "Message Send"
                };

                return Json(result);
            }

            else
            {
                result = new GenericResult()
                {
                    Succeeded = false,
                    Message = "Message Error"
                };
                return Json(result);
            }
        }

    }
}