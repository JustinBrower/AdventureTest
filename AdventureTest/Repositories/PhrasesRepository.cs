using System.Collections.Generic;
using System.Data;
using System.Linq;
using AdventureTest.Models;
using Dapper;

namespace AdventureTest.Repositories
{
    public class PhrasesRepository
    {
        private readonly IDbConnection _db;

        public PhrasesRepository(IDbConnection db)
        {
            _db = db;
        }

        internal List<Phrase> GetAllPhrases()
        {
            string sql = @"
            SELECT
            *
            FROM phrases
            ";
            return _db.Query<Phrase>(sql).ToList();
        }

        internal List<Phrase> GetPhrasesByTeacher(string name)
        {
            string sql = @"
            SELECT
            *
            FROM phrases
            WHERE teacher = @name;
            ";
            return _db.Query<Phrase>(sql, new { name }).ToList();
        }
    }
}