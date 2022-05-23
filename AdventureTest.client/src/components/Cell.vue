<template>
<div @click="move()" class="grid-item" :class="{home: location === coords}" :id="coords">{{coords}}</div>
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
        try {
        } catch (error) {
         logger.error(error)
         Pop.toast(error.message, 'error')
        }
      })
        return {
            move(){
                try {
                    mazeService.move(AppState.location, this.coords)
                } catch (error) {
                 logger.error(error)
                 Pop.toast(error.message, 'error')
                }
            },
            location: computed(() => AppState.location),
            coords: computed(() => {
              let coords = {}
             coords = mazeService.setCoordinates(props.id)
             return coords
              } )
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
