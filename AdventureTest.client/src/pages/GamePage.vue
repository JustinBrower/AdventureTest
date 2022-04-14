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
    </div>
  </div>
</template>


<script>
import { computed } from '@vue/reactivity'
import { AppState } from '../AppState'
import { elementsService } from "../services/ElementsService"
import { Dialogue } from "../TextDump"
import { onMounted, watchEffect } from '@vue/runtime-core'
export default {
  setup() {
    onMounted(() => {
      elementsService.displayText(Dialogue.greeting, 50)
    })
    return {
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
</style>