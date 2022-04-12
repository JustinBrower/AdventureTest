using System;
using System.Collections.Generic;
using AdventureTest.Models;
using AdventureTest.Services;
using Microsoft.AspNetCore.Mvc;

namespace AdventureTest.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class QuestionsController : ControllerBase
    {
        private readonly QuestionsService _qs;

        public QuestionsController(QuestionsService qs)
        {
            _qs = qs;
        }

        [HttpGet]
        public ActionResult<List<Question>> GetAllQuestions()
        {
            try
            {
                List<Question> questions = _qs.GetAllQuestions();
                return Ok(questions);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        [HttpGet("{name}")]
        public ActionResult<List<Question>> GetQuestionsByTeacher(string name)
        {
            try
            {
                List<Question> questions = _qs.GetQuestionsByTeacher(name);
                return Ok(questions);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}