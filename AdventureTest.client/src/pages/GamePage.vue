<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <img
        class="img-fluid p-0 bg-size"
        src="../assets/img/dungeon2.png"
        alt=""
      />
    </div>
    <div class="top-right console p-2">
      <strong class="wrap" id="text"></strong>

      <strong id="answers" class="hidden">
        <p
          :class="{ green: activeAnswer === 0 }"
          @click="setActive(0)"
          class="hoverable mt-5"
          id="a"
        >
          A. {{ answers[0] }}
        </p>
        <p
          :class="{ green: activeAnswer === 1 }"
          @click="setActive(1)"
          class="hoverable"
          id="b"
        >
          B. {{ answers[1] }}
        </p>
        <p
          :class="{ green: activeAnswer === 2 }"
          @click="setActive('c')"
          class="hoverable"
          id="c"
        >
          C. {{ answers[2] }}
        </p>
        <p
          :class="{ green: activeAnswer === 3 }"
          @click="setActive('d')"
          class="hoverable"
          id="d"
        >
          D. {{ answers[3] }}
        </p>
      </strong>

      <button
        class="btn btn-info hidden bottom-right"
        id="next"
        @click="sendGreeting"
      >
        Next
      </button>
      <button
        class="btn btn-success hidden bottom-right"
        id="nextQuestion"
        @click="sendQuestion"
      >
        Next
      </button>
      <button
        class="btn btn-success hidden bottom-right"
        id="submit"
        @click="submitAnswer"
      >
        Submit
      </button>
      <button
        class="btn btn-warning hidden bottom-right-reset"
        id="reset"
        @click="reset"
      >
        Reset Console
      </button>
    </div>
  </div>
</template>


<script>
import { computed } from '@vue/reactivity'
import { AppState } from '../AppState'
import { elementsService } from "../services/ElementsService"
import { Dialogue } from "../TextDump"
import { onMounted, watchEffect } from '@vue/runtime-core'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
export default {
  setup() {
    // ORDER OF THE INTRO DIALOGUE
    let introOrder = 0
    // STATE OF THE GAME
    let state = 0
    // QUESTION ORDER
    let q = 0
    onMounted(() => {
      try {
        document.getElementById('next').classList.remove('hidden')
        elementsService.displayText(Dialogue.messages.intro[introOrder], 40)
        introOrder++
        elementsService.collectAnswers(Dialogue.messages[state].wrongAnswer[q], Dialogue.messages[q].correctAnswer[q])
      } catch (error) {
        logger.error(error)
        Pop.toast(error.message, 'error')
      }
    })
    watchEffect(() => {
      AppState.game
      AppState.activeAnswer
    })
    return {
      introOrder,
      state,
      q,
      sendGreeting() {
        try {
          if (this.greeting[introOrder]) {
            elementsService.displayText(this.greeting[introOrder], 40)
          }
          introOrder++
          if (introOrder == 4) {
            document.getElementById('nextQuestion').classList.remove('hidden')
            document.getElementById('next').classList.add('hidden')
          }
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      },
      sendQuestion() {
        try {
          if (this.message[state].question[q]) {
            AppState.game = 1
            document.getElementById('nextQuestion').classList.add('hidden')
            elementsService.displayText(this.message[state].question[q], 50)
          }
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      },
      setActive(answer) {
        try {
          elementsService.setActive(answer)
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      },
      submitAnswer() {
        try {
          if (AppState.activeAnswer) {
            elementsService.checkAnswer()
            q++
          } else {
            document.getElementById('text').innerText += "Please select an answer."
          }
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      },
      collectAnswers() {
        try {
          elementsService.collectAnswers(this.message[state].wrongAnswer[q], this.message[state].correctAnswer[q])
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      },
      reset() {
        try {
          document.getElementById('answers').classList.add('hidden')
          document.getElementById('submit').classList.add('hidden')
          elementsService.displayText(this.message[state].question[q], 50)
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      },


      greeting: computed(() => Dialogue.messages.intro),
      message: computed(() => Dialogue.messages),
      state: computed(() => AppState.state),
      activeAnswer: computed(() => AppState.activeAnswer),
      answers: computed(() => AppState.answers)
    }
  }
}
</script>


<style lang="scss" scoped>
.bg-size {
  height: 86.4vh;
  width: 80%;

  transform: translateX(-192px);
  opacity: 95%;
}
.top-right {
  position: absolute;
  top: 71px;
  right: 0.1px;
}
.bottom-right {
  position: absolute;
  bottom: 20px;
  right: 10px;
}
.bottom-right-reset {
  position: absolute;
  bottom: 20px;
  right: 238px;
}
.console {
  height: 86.4vh;
  background-color: rgb(207, 120, 120);
  width: 384px;
  border: 5px solid rgb(63, 15, 15);
}
.wrap {
  white-space: normal;
  word-break: break-all;
  overflow-wrap: break-word;
}
.hidden {
  display: none;
}
.hoverable:hover {
  cursor: pointer;
}
.green {
  color: green;
}
</style>