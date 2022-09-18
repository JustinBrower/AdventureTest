import { AppState } from "../AppState";
import { Dialogue } from "../TextDump";
import { textService } from "./TextService";

let done = []

class AnswersService {

    checkAnswer() {
        let g = Math.floor(Math.random() * Dialogue.messages.badJob.length)
        let b = Math.floor(Math.random() * Dialogue.messages.goodJob.length)
        if (AppState.correctAnswer == AppState.activeAnswer) {
            textService.displayText(Dialogue.messages.goodJob[g], 40)
        } else {
            textService.displayText(Dialogue.messages.badJob[b], 40)
            AppState.strikes++
        }
        document.getElementById('nextQuestion').classList.remove('hidden')
        document.getElementById('answers').classList.add('hidden')
        document.getElementById('help').classList.add('hidden')
        document.getElementById('submit').classList.add('hidden')
        AppState.correctAnswer = null
        AppState.activeAnswer = null
    }

    randomizeAnswers(state) {
        let copy = Dialogue.messages[state].question
        let num = 0
        let doneCopy = done.filter(o => o.state == state)
        let bad = []
        for (let i = 0; i < doneCopy.length; i++) {
            bad.push(doneCopy[i].index)
        }
        do {
            num = Math.floor(Math.random() * copy.length)
        } while (bad.includes(num))
        done.push({ state: state, index: num })
        return num
    }

    collectAnswers(wrongAnswers, rightAnswer) {
        AppState.correctAnswer = rightAnswer
        let answers = wrongAnswers
        let correctAnswer = rightAnswer
        answers.push(correctAnswer)
        let currentIndex = answers.length, randomIndex;
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [answers[currentIndex], answers[randomIndex]] = [
                answers[randomIndex], answers[currentIndex]];
        }
        AppState.answers = answers
        let index = AppState.answers.findIndex(a => a == AppState.correctAnswer)
        AppState.correctAnswer = index
    }
}


export const answersService = new AnswersService();
