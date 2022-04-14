import { logger } from "../utils/Logger";

class ElementsService {

    displayText(message, int) {
        let interval = null
        // let sentences = message.split(".")
        let copy = message.split("")
        copy = copy.reverse()
        interval = setInterval(() => {
            let char = copy.pop()
            if (char != undefined) {
                if (char == ' ') {
                    document.getElementById('text').innerHTML += '&nbsp'
                }
                document.getElementById('text').innerText += char
            }
        },
            int)
        interval = clearInterval(null)
    }
}


export const elementsService = new ElementsService();