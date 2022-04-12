using System;
using System.Collections.Generic;
using AdventureTest.Models;
using AdventureTest.Services;
using Microsoft.AspNetCore.Mvc;

namespace AdventureTest.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TeachersController : ControllerBase
    {
        private readonly TeachersService _ts;

        public TeachersController(TeachersService ts)
        {
            _ts = ts;
        }

        [HttpGet]

        public ActionResult<List<Teacher>> GetAllTeachers()
        {
            try
            {
                List<Teacher> teachers = _ts.GetAllTeachers();
                return Ok(teachers);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }

}
