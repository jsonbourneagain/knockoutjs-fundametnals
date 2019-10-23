using PerpetuumSoft.Knockout;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using KnockoutMVC.Models;

namespace KnockoutMVC.Controllers
{
    public class HelloWorldController : KnockoutController
    {
        // GET: HelloWorld
        public ActionResult Index()
        {
            ViewBag.Title = "Hello world";
            return View(
                new HelloWorld
                {
                    FirstName = "Lavakesh",
                    LastName = "Pandey"
                });
        }
    }
}