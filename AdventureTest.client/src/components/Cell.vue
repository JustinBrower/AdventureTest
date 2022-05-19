<template>
<div @click="move()" class="grid-item" :class="{home: location === id}" :id="id">{{id}}</div>
</template>


<script>
import { computed } from '@vue/reactivity'
import { AppState } from '../AppState'
import {mazeService} from '../services/MazeService'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
export default {
    props:{
        id: {
            typeof: Number,
            required: true,
        }
    },
    setup(props){
        return {
            move(){
                try {
                    mazeService.move(AppState.location, props.id)
                } catch (error) {
                 logger.error(error)
                 Pop.toast(error.message, 'error')
                }
            },
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
  font-size: 30px;
  text-align: center;
  height: 85px;
}
.home{
    background-color: green;
    color: green;
}
</style>