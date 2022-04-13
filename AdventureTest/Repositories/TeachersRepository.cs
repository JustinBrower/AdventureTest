using System.Collections.Generic;
using System.Data;
using System.Linq;
using AdventureTest.Models;
using Dapper;

namespace AdventureTest.Repositories
{
    public class TeachersRepository
    {
        private readonly IDbConnection _db;

        public TeachersRepository(IDbConnection db)
        {
            _db = db;
        }

        internal List<Teacher> GetAllTeachers()
        {
            string sql = @"
            SELECT
            *
            FROM teachers
            ";
            return _db.Query<Teacher>(sql).ToList();
        }

        internal Teacher GetTeacherByName(string name)
        {
            string sql = @"
            SELECT
            *
            FROM teachers
            WHERE name = @Name;
            ";
            return _db.QueryFirstOrDefault<Teacher>(sql, new { name });
        }
    }
}