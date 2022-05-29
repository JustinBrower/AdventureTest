

let recent = ''
let int = null
class TextService {

    displayText(message, delay) {
        recent = message
        clearInterval(int)
        int = null
        document.getElementById('text').innerText = ''
        let copy = message.split("")
        int = setInterval(() => {
            if (copy.length > 0) {
                let char = copy.shift()
                if (char) {
                    if (char == ' ') {
                      document.getElementById('text').innerText += ' '
                    } else {
                      document.getElementById('text').innerText += char
                    }
                }
            }
        },
            delay || 40)
    }

    displayQuestion(message, delay) {
        recent = message
        clearInterval(int)
        int = null
        document.getElementById('answers').classList.add('hidden')
        document.getElementById('help').classList.add('hidden')
        document.getElementById('reset').classList.add('hidden')
        document.getElementById('text').innerText = ''
        let copy = message.split("")
        int = setInterval(() => {
            if (copy.length > 0) {
                let char = copy.shift()
                if (char) {
                    if (char == ' ') {
                        document.getElementById('text').innerHTML += '&nbsp'
                    }
                    document.getElementById('text').innerText += char
                }
            } else {
                document.getElementById('answers').classList.remove('hidden')
                document.getElementById('submit').classList.remove('hidden')
                document.getElementById('help').classList.remove('hidden')
                document.getElementById('reset').classList.remove('hidden')
            }
        },
            delay)
    }

    reset() {
        if (recent) {
            this.displayText(recent, 40)
        } else {
            console.log('did nothing');
        }
    }


}

export const textService = new TextService()
