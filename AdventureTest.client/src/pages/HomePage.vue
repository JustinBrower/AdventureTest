<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-8 d-flex justify-content-center">
        <h1 class="pt-5">Adventure Test</h1>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-8 d-flex justify-content-center pt-5">
        <router-link :to="{ name: 'Game' }">
          <button class="btn btn-dark rounded-pill hoverable menu-btn">
            <h1>New Game</h1>
          </button>
        </router-link>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-8 d-flex justify-content-center pt-5">
        <button class="btn btn-dark rounded-pill hoverable menu-btn">
          <h1>Continue</h1>
        </button>
        <!-- <textarea
          v-model="str"
          name="test"
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <button @click.prevent="test" type="click" class="btn btn-info">
          submit
        </button> -->
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
export default {
  name: 'Home',
  setup() {
    const str = ref({})
    return {
      str,
      async test() {
        try {
          logger.log("evaluating", str.value)
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.menu-btn {
  width: 50vh;
  height: 8vh;
}
</style>
