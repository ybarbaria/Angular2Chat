using Angular2Simple.Models;
using Angular2Simple.Models.ViewModel;
using Models;
using Models.DAL;
using Models.ViewModel;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web.Http;
using WrapperExtensions;

namespace Angular2Simple.Controllers
{
    public class AccountController : ApiController
    {
        private readonly Repository _repository;

        public AccountController()
        {
            this._repository = new Repository();
        }

        [HttpPost]
        public IHttpActionResult Login(User user)
        {
            GenericResult authResult;

            bool exist = this._repository.Entity<User>().Any(u => u.Username == user.Username && u.Password == user.Password);
            if (exist)
            {
                authResult = new GenericResult()
                {
                    Succeeded = true,
                    Message = "Auth Success"
                };

                return Json(authResult);
            }

            else
            {
                authResult = new GenericResult()
                {
                    Succeeded = false,
                    Message = "Auth error"
                };
                return Json(authResult);
            }
        }


    }
}
