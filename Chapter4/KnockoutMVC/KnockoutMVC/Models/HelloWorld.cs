using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;
using DelegateDecompiler;
using Newtonsoft.Json;

namespace KnockoutMVC.Models
{
    public class HelloWorld
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        [Computed]
        public string FullName
        {
            get { return FirstName + " " + LastName; }
        }
    }
}