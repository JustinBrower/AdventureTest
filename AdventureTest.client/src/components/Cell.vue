<template>
<div
@click="move()"
class="grid-item"
:id="coords"
:class="{
  home: location.x == coords.x && location.y == coords.y,
  dead: isDead,
  door: isDoor
  }"
>
{{coords}}</div>
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
      })
        return {
            move(){
                try {
                    mazeService.move(this.location, this.coords, props.id)
                } catch (error) {
                 logger.error(error)
                 Pop.toast(error.message, 'error')
                }
            },
            coords: computed(() => {
              let coords = {}
             coords = mazeService.setCoordinates(props.id)
             if(AppState.deadCells.includes(props.id)){
               AppState.deadCoords.push(coords)
               logger.log("dead coords", AppState.deadCoords)
             }
             return coords
              } ),
           location: computed(() => AppState.location),
           isDead: computed(() => AppState.deadCells.includes(props.id)),
           isDoor: computed(() => AppState.doors.includes(props.id))
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
.dead{
  background-color: rgb(87, 56, 9);
  color: rgb(87, 56, 9);
}
.door{
  background-color: rgb(134, 134, 35);
  color: rgb(134, 134, 35);
}
</style>
