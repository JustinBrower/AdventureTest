import { AppState } from "../AppState"
import { logger } from "../utils/Logger"

let int = null
class MazeService {


    // FIXME THIS IS REALLY CLOSE TO WORKING

  move(location, destination) {
        clearInterval(int)
        int = null
        int = setInterval(() => {
            let nearbyCells = [location - 1, location + 1, location + 10, location - 10, location - 9, location + 9, location - 11, location + 11]
            let nearest = 3000
            let path = Math.abs(location - destination)
            let nearestCell = null
            for (let i = 0; i < nearbyCells.length; i++) {
                let newPath = Math.abs(destination - nearbyCells[i])
                if (newPath < nearest) {
                    nearest = newPath
                    nearestCell = nearbyCells[i]
                }
            }
            console.log("The nearest cell is", nearestCell)
            AppState.location = nearestCell
            if (location != destination) {
                this.move(AppState.location, destination)
            }
            if (location == destination) {
                console.log("Done!", destination, location)
                clearInterval(int)

            }

        },
            1000)
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
