using System;
using System.Collections.Generic;
using AdventureTest.Models;
using AdventureTest.Services;
using Microsoft.AspNetCore.Mvc;

namespace AdventureTest.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class PhrasesController : ControllerBase
    {
        private readonly PhrasesService _ps;

        public PhrasesController(PhrasesService ps)
        {
            _ps = ps;
        }

        [HttpGet]
        public ActionResult<List<Phrase>> GetAllPhrases()
        {
            try
            {
                List<Phrase> phrases = _ps.GetAllPhrases();
                return Ok(phrases);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("{name}")]
        public ActionResult<List<Phrase>> GetPhrasesByTeacher(string name)
        {
            try
            {
                List<Phrase> phrases = _ps.GetPhrasesByTeacher(name);
                return Ok(phrases);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}