import { AppState } from "../AppState";

const baseDelay = 40;
let recent = '';
let int = null;
class TextService {

    /**
   * @summary Used to display generic text in the text box
   * @param {String} message
   * @param {Number} delay
   */
  displayText(message, delay) {
    AppState.gameState = AppState.gameStates[2];
    recent = message;
    clearInterval(int);
    int = null;
    document.getElementById('text').innerText = '';
    let copy = message.split("");
    int = setInterval(() => {
      if (copy.length > 0) {
        let char = copy.shift();
        if (char) {
          if (char == ' ') {
            document.getElementById('text').innerText += ' ';
          } else {
            document.getElementById('text').innerText += char;
          }
        }
      } else {
            AppState.gameState = AppState.gameStates[3];
      }
    },
      delay || baseDelay);
  };

  /**
   * @summary Used specifically to display questions in the text box, will make answers visible when finished
   * @param {String} message
   * @param {Number} delay
   */
  displayQuestion(message, delay) {
    AppState.gameState = AppState.gameStates[1];
    recent = message;
    clearInterval(int);
    int = null;
    document.getElementById('text').innerText = '';
    let copy = message.split("");
    int = setInterval(() => {
      if (copy.length > 0) {
        let char = copy.shift();
        if (char) {
          if (char == ' ') {
            document.getElementById('text').innerHTML += '&nbsp';
          }
          document.getElementById('text').innerText += char;
        }
      } else {
        AppState.gameState = AppState.gameStates[0];
      }
    },
      delay || baseDelay);
  };

    /**
   * @summary Calls displayText() with the most recent message and base delay
   */
  reset() {
    this.displayText(recent, baseDelay);
  };
}

export const textService = new TextService();
