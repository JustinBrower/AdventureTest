import { AppState } from "../AppState"
import { logger } from "../utils/Logger"

let int = null
class MazeService {


  // NOTE DISTANCE FORMULA d = √[(x₂ - x₁)² + (y₂ - y₁)²],

  move(location, destination) {
    if (location.x == destination.x && location.y == destination.y) {
      clearInterval(int)
      return logger.log("Already here")
    }
    clearInterval(int)
    int = null
    int = setInterval(() => {
      let nearestInt = 50
      let nearestCell = {}
      let nearby = [
        { 'x': location.x - 1, 'y': location.y - 1 },
        { 'x': location.x - 1, 'y': location.y + 1 },
        { 'x': location.x - 1, 'y': location.y },
        { 'x': location.x + 1, 'y': location.y - 1 },
        { 'x': location.x + 1, 'y': location.y + 1 },
        { 'x': location.x + 1, 'y': location.y },
        { 'x': location.x, 'y': location.y + 1 },
        { 'x': location.x, 'y': location.y - 1},
      ]

      for (let i = 0; i < nearby.length; i++) {
        let thisX = Math.pow((nearby[i].x - destination.x), 2)
        let thisY = Math.pow((nearby[i].y - destination.y), 2)
        let thisD = Math.sqrt(thisX + thisY)
        if (thisD < nearestInt) {
          nearestInt = thisD
          nearestCell = nearby[i]
        }
      }
      AppState.location = nearestCell
      if (nearestCell.x != destination.x || nearestCell.y != destination.y) {
        this.move(nearestCell, destination)
      } else {
        clearInterval(int)
      }
    }
    ,500)
  }


  setCoordinates(id){
  let x = 0
  let y = 0
  let coords = {}
    id = id.toString().split('')
  if(id.length == 2){
    x = Math.floor(id[1])
    y = Math.floor(id[0]) + 1
    if (x == 0) {
      x = 10
      y = Math.floor(id[0])
    }
  }
    if (id.length == 1) {
      x = Math.floor(id[0])
      y = 1
  }
    coords = { 'x': x, 'y': y }
  return coords
}




}

export const mazeService = new MazeService()
