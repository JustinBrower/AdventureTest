import { AppState } from "../AppState";

let recent = ''
let int = null
class ElementsService {

    displayText(message, delay) {
        recent = message
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
            }
        },
            delay)
    }

    displayQuestion(message, delay) {
        recent = message
        clearInterval(int)
        int = null
        document.getElementById('answers').classList.add('hidden')
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
                document.getElementById('answers').classList.remove('hidden')
                document.getElementById('submit').classList.remove('hidden')
            }
        },
            delay)
    }

    checkAnswer() {
        if (AppState.correctAnswer == AppState.activeAnswer) {
            this.displayText("Correct! But what about this...", 70)
        } else {
            this.displayText("Not quite! Let's try another...", 70)
        }
        document.getElementById('nextQuestion').classList.remove('hidden')
        document.getElementById('answers').classList.add('hidden')
        document.getElementById('submit').classList.add('hidden')
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
        let temp = AppState.answers.findIndex(a => a == AppState.correctAnswer)
        AppState.correctAnswer = temp
    }
    reset() {
        if (recent) {
            this.displayText(recent, 40)
        } else {
            console.log('did nothing');
        }
    }
}


export const elementsService = new ElementsService();