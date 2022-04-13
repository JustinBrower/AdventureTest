<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <img
        class="img-fluid p-0 bg-size"
        src="../assets/img/dungeon.png"
        alt=""
      />
    </div>
  </div>
</template>


<script>
import { onMounted } from '@vue/runtime-core'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
import { elementsService } from '../services/ElementsService'
export default {
  setup() {
    return {
    }
  }
}
</script>


<style lang="scss" scoped>
.bg-size {
  height: 86.4vh;
  //   width: 200vh;
  object-fit: cover;
  opacity: 95%;
}
</style>