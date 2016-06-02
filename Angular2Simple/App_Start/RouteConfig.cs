using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Routing;

namespace Angular2Simple
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            //routes.MapRoute(
            //    name: "Default",
            //    url: "{controller}/{action}/{id}",
            //    defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            //);


            //routes.MapRoute(
            //   name: "default",
            //   url: "{*url}",
            //   defaults: new { controller = "Home", action = "Index" }
            //);

            //routes.MapRoute(
            //name: "default",
            //url: "{controller=Home}/{action=Index}/{id?}");
            
            routes.MapRoute(
                name: "spa",
                url: "{*url}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );

            //routes.MapRoute(
            //    name: "Default",
            //    url: "{controller}/{action}/{id}",
            //    defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            //);

            // API ROUTE
            //routes.MapRoute(
            //name: "api",
            //    url: "api/{controller}/{action}/{id}",
            //    defaults: new { id = RouteParameter.Optional }
            //);

            //routes.MapRoute(
            //    name: "DefaultApi",
            //    url: "api/{controller}/{id}",
            //    defaults: new { id = RouteParameter.Optional }
            //);

            // routes.MapWebApiRoute("DefaultApi", "api/{controller}/{id?}");
        }
    }
}
