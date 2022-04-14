import { logger } from "../utils/Logger";

let int = null
class ElementsService {

    // TODO MAKE THIS pause LONGER ON '.'
    displayText(message, delay) {
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
                // NOTE I AM 99% SURE THIS IS CLEARING THE INTERVAL
                clearInterval(int)
                int = null
                document.getElementById('next').classList.remove('hidden')
            }
        },
            delay)
    }
}


export const elementsService = new ElementsService();