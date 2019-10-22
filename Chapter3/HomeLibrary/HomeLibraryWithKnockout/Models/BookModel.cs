using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HomeLibraryWithKnockout.Models
{
    public class BookModel
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public int Year { get; set; }
    }
}