using System.Collections.Generic;
using System.Data;
using System.Linq;
using AdventureTest.Models;
using Dapper;

namespace AdventureTest.Repositories
{
    public class QuestionsRepository
    {
        private IDbConnection _db;

        public QuestionsRepository(IDbConnection db)
        {
            _db = db;
        }

        internal List<Question> GetAllQuestions()
        {
            string sql = @"
            SELECT
            *
            FROM questions
            ";
            return _db.Query<Question>(sql).ToList();

        }

        internal List<Question> GetQuestionsByTeacher(string name)
        {
            string sql = @"
            SELECT
            *
            FROM questions
            WHERE teacher = @name;
            ";
            return _db.Query<Question>(sql, new { name }).ToList();
        }
    }
}