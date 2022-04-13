using System.Collections.Generic;
using AdventureTest.Models;
using AdventureTest.Repositories;

namespace AdventureTest.Services
{
    public class PhrasesService
    {
        private readonly PhrasesRepository _qr;

        public PhrasesService(PhrasesRepository qr)
        {
            _qr = qr;
        }

        internal List<Phrase> GetAllPhrases()
        {
            return _qr.GetAllPhrases();
        }

        internal List<Phrase> GetPhrasesByTeacher(string name)
        {
            return _qr.GetPhrasesByTeacher(name);
        }
    }
}