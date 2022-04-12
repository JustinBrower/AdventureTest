using System;
using System.Collections.Generic;

namespace AdventureTest.Models
{
    public class Question
    {
        public int Id { get; set; }
        public string Body { get; set; }
        public string Answer { get; set; }
        public string Teacher { get; set; }
    }
}