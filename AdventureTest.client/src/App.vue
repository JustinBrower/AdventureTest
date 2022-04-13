<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
    <!-- FIXME GET MUSIC TO WORK -->
    <!-- <div class="d-flex align-items-end justify-content-start">
      <div
        v-if="music"
        class="mdi mdi-volume-high mdi-48px hoverable"
        @click="flip"
      ></div>
      <div
        v-if="!music"
        class="mdi mdi-volume-off mdi-48px hoverable"
        @click="flip"
      ></div>
      <audio autoplay :muted="!music" preload="auto">
        <source src="src/assets/music/Hammerwatch.mp3" />
      </audio>
    </div> -->
  </main>
  <footer>
    <div class="bg-dark text-light text-center p-3">
      Made with 💖 by a CodeWorks Student
    </div>
  </footer>
</template>

<script>
import { computed, onMounted, watchEffect } from 'vue'
import { AppState } from './AppState'
import { logger } from './utils/Logger'
import Pop from './utils/Pop'
export default {
  name: 'App',
  setup() {
    let music = false
    return {
      music,
      async flip() {
        try {
          music = !music
          logger.log(music)
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      },
      appState: computed(() => AppState),
      music: computed(() => AppState.music)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
.mdi-18px {
  font-size: 18px;
}
.mdi-24px {
  font-size: 24px;
}
.mdi-36px {
  font-size: 36px;
}
.mdi-48px {
  font-size: 48px;
}
.mdi-dark {
  color: rgba(0, 0, 0, 0.54);
}
.mdi-dark.mdi-inactive {
  color: rgba(0, 0, 0, 0.26);
}
.mdi-light {
  color: rgba(255, 255, 255, 1);
}
.mdi-light.mdi-inactive {
  color: rgba(255, 255, 255, 0.3);
}
</style>
