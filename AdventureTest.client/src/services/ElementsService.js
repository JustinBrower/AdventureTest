import { AppState } from "../AppState";
import { Dialogue } from "../TextDump";
import { logger } from "../utils/Logger";

let int = null
class ElementsService {

    // TODO MAKE THIS pause LONGER ON '.'
    displayText(message, delay, answered) {
        clearInterval(int)
        int = null
        document.getElementById('text').innerText = ''
        let copy = message.split("")
        copy = copy.reverse()
        int = setInterval(() => {
            if (copy.length > 0) {
                let char = copy.pop()
                if (char) {
                    if (char == ' ') {
                        document.getElementById('text').innerHTML += '&nbsp'
                    }
                    document.getElementById('text').innerText += char
                }
            } else {
                clearInterval(int)
                int = null
                if (AppState.game > 0) {
                    document.getElementById('submit').classList.remove('hidden')
                    document.getElementById('reset').classList.remove('hidden')
                }
                if (answered == undefined) {
                    document.getElementById('answers').classList.remove('hidden')
                } else {
                    document.getElementById('reset').classList.add('hidden')
                }
            }
        },
            delay)
    }

    setActive(answer) {
        AppState.activeAnswer = answer
    }

    checkAnswer() {
        if (AppState.correctAnswer == AppState.activeAnswer) {
            this.displayText("Correct! But what about this...", 70, 0)
        } else {
            this.displayText("Not quite! Let's try another...", 70, 0)
        }
        document.getElementById('answers').classList.add('hidden')
        AppState.correctAnswer = null
        AppState.activeAnswer = null
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
    }
}


export const elementsService = new ElementsService();