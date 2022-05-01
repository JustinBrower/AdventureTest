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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  setup() {
    return {
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
