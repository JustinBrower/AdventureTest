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
          @click="setActive(2)"
          class="hoverable"
          id="c"
        >
          C. {{ answers[2] }}
        </p>
        <p
          :class="{ green: activeAnswer === 3 }"
          @click="setActive(3)"
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
        class="btn btn-warning bottom-right-reset mdi mdi-restart mdi-16px"
        id="reset"
        @click="reset"
      ></button>
      <a :href="help" target="_blank">
        <button class="btn btn-danger hidden bottom-right-help" id="help">
          Help!
        </button>
      </a>
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
    let introOrder = 0
    let state = 0
    let q = 0
    onMounted(() => {
      try {
        document.getElementById('next').classList.remove('hidden')
        elementsService.displayText(Dialogue.messages.intro[introOrder], 40)
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
          introOrder++
          if (Dialogue.messages.intro[introOrder]) {
            elementsService.displayText(Dialogue.messages.intro[introOrder], 40)
          }
          if (introOrder == 2) {
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
          if (Dialogue.messages[state].question[q]) {
            AppState.answers = []
            this.collectAnswers()
            document.getElementById('nextQuestion').classList.add('hidden')
            elementsService.displayQuestion(Dialogue.messages[state].question[q], 50)
            AppState.help = Dialogue.messages[state].help[q]
          } else {
            state++
            q = 0
            this.sendQuestion()
          }
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      },
      setActive(answer) {
        try {
          AppState.activeAnswer = answer
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      },
      submitAnswer() {
        try {
          if (this.activeAnswer != undefined) {
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
          if (Dialogue.messages[state].wrongAnswer[q]) {
            elementsService.collectAnswers(Dialogue.messages[state].wrongAnswer[q], Dialogue.messages[state].correctAnswer[q])
          }
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      },
      reset() {
        try {
          elementsService.reset()
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      },
      activeAnswer: computed(() => AppState.activeAnswer),
      answers: computed(() => AppState.answers),
      help: computed(() => AppState.help)
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
  right: 310px;
}
.bottom-right-help {
  position: absolute;
  bottom: 20px;
  right: 240px;
}
.console {
  height: 86.4vh;
  background-color: rgb(207, 120, 120);
  width: 384px;
  border: 5px solid rgb(63, 15, 15);
}
.wrap {
  // word-wrap: break-word;
  // flex-wrap: wrap;
  word-break: break-all;
  // overflow-wrap: break-word;
  // flex-wrap: wrap-reverse;
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