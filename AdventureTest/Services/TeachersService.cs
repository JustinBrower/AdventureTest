using System.Collections.Generic;
using AdventureTest.Models;
using AdventureTest.Repositories;

namespace AdventureTest.Services
{
    public class TeachersService
    {
        private readonly TeachersRepository _tr;

        public TeachersService(TeachersRepository tr)
        {
            _tr = tr;
        }

        internal List<Teacher> GetAllTeachers()
        {
            return _tr.GetAllTeachers();
        }

        internal Teacher GetTeacherByName(string name)
        {
            return _tr.GetTeacherByName(name);
        }
    }
}