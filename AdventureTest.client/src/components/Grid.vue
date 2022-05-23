<template>
  <div class="grid-container">
      <div  v-for="index in 80" :key="index">
          <Cell :id="index"/>
      </div>
</div>


</template>


<script>
export default {
    setup() {
        return {};
    },
}
</script>


<style lang="scss" scoped>
.grid-container {
  display: grid;
  background-color: grey;
  grid-template-columns: 150px 150px 150px 150px 150px 150px 150px 150px 150px 150px;
  padding: 10px;
}
</style>
