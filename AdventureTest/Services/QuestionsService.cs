using System;
using System.Collections.Generic;
using AdventureTest.Models;
using AdventureTest.Repositories;

namespace AdventureTest.Services
{
    public class QuestionsService
    {
        private readonly QuestionsRepository _qr;

        public QuestionsService(QuestionsRepository qr)
        {
            _qr = qr;
        }

        internal List<Question> GetAllQuestions()
        {
            return _qr.GetAllQuestions();
        }

        internal List<Question> GetQuestionsByTeacher(string name)
        {
            return _qr.GetQuestionsByTeacher(name);
        }
    }
}