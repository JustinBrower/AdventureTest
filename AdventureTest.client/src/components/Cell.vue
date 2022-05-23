<template>
<div @click="move()" class="grid-item" :class="{home: location.x == coords.x && location.y == coords.y}" :id="coords">{{coords}}</div>
</template>


<script>
import { computed } from '@vue/reactivity'
import { AppState } from '../AppState'
import {mazeService} from '../services/MazeService'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
import { onMounted } from '@vue/runtime-core'
export default {
    props:{
        id: {
            typeof: Number,
            required: true,
        }
    },
    setup(props){
      onMounted(() => {
        logger.log(AppState.location)
      })
        return {
            move(){
                try {
                    mazeService.move(this.location, this.coords)
                } catch (error) {
                 logger.error(error)
                 Pop.toast(error.message, 'error')
                }
            },
            coords: computed(() => {
              let coords = {}
             coords = mazeService.setCoordinates(props.id)
             AppState.coords = coords
             return coords
              } ),
              location: computed(() => AppState.location)
        }
    }
}
</script>


<style lang="scss" scoped>
.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 20px;
  text-align: center;
  height: 85px;
}
.home{
    background-color: green;
    color: green;
}
</style>
