import { AppState } from "../AppState"
import { logger } from "../utils/Logger"

let int = null
class MazeService {




  /**
   * @summary Will move 'location' to the cell that the user clicked and stops if unable to reach
   * @param {Object} location
   * @param {Object} destination
   * @param {Number} id
   */
  move(location, destination, id) {
    if (location.x == destination.x && location.y == destination.y || AppState.deadCells.includes(id)) {
      clearInterval(int);
      return logger.log("Does not move");
    }
    clearInterval(int)
    int = null;
    int = setInterval(() => {

      let nearby = this._findNearbyCells(location)

      if (nearby.length == 0) {
        clearInterval(int);
        return logger.log("nowhere to go");
      }

      let nearestCell = this._findPathToDestination(nearby, destination)

      if (nearestCell == AppState.location) {
        clearInterval(int);
        return logger.log("can't reach");
      }

      AppState.location = nearestCell;
      if (nearestCell.x != destination.x || nearestCell.y != destination.y && nearby.length != 0) {
        this.move(nearestCell, destination, id);
      } else {
        clearInterval(int);
      }
    }
      , 500);
  }

/**
 * @summary Finds all cells surrounding the location
 * @param {Object} location
 * @returns {Object[]} An array of the nearby cells
 */
  _findNearbyCells(location) {
    let nearby = [
      { 'x': location.x - 1, 'y': location.y - 1 },
      { 'x': location.x - 1, 'y': location.y + 1 },
      { 'x': location.x - 1, 'y': location.y },
      { 'x': location.x + 1, 'y': location.y - 1 },
      { 'x': location.x + 1, 'y': location.y + 1 },
      { 'x': location.x + 1, 'y': location.y },
      { 'x': location.x, 'y': location.y + 1 },
      { 'x': location.x, 'y': location.y - 1 },
    ];

    for (let i = 0; i < nearby.length; i++) {
      if (nearby[i].x <= 0 || nearby[i].y <= 0 || nearby[i].x > 10 || nearby[i].y > 8) {
        nearby.splice(i, 1);
        i = -1;
      }
    }

    for (let j = 0; j < nearby.length; j++) {
      let spliced = false;
      for (let k = 0; k < AppState.deadCoords.length; k++) {
        if (AppState.deadCoords[k].x == nearby[j].x && AppState.deadCoords[k].y == nearby[j].y) {
          spliced = true;
          nearby.splice(j, 1);
          break;
        }
      }
      if (spliced == true) {
        j = -1;
      }
    }
    console.log(nearby);
    return nearby;
  }

  /**
   * @summary Returns the cell nearest to the location on its way to its destination
   * @param {Object[]} cells
   * @param {Object} destination
   * @returns {Object} Nearest cell
   */
  _findPathToDestination(cells, destination) {
    let myDistance = this._findDistanceFromMeToDestination(AppState.location, destination)
    let nearestCell = {};
    let willMove = false;
    for (let i = 0; i < cells.length; i++) {
      let thisX = Math.pow((cells[i].x - destination.x), 2);
      let thisY = Math.pow((cells[i].y - destination.y), 2);

      let thisD = Math.sqrt(thisX + thisY);
      if (thisD < myDistance) {
        willMove = true;
        myDistance = thisD;
        nearestCell = cells[i];
      }
    }
    if (willMove == true) {
      return nearestCell;
    } else {
      return AppState.location;
    }
  }

  /**
   * @summary Returns the distance using the Distance Formula
   * @param {Object} location
   * @param {Object} destination
   * @returns {Number} Distance
   * @note DISTANCE FORMULA d = √[(x₂ - x₁)² + (y₂ - y₁)²]
   */
  _findDistanceFromMeToDestination(location, destination) {
    let thisX = Math.pow((location.x - destination.x), 2);
    let thisY = Math.pow((location.y - destination.y), 2);
    let thisD = Math.sqrt(thisX + thisY);
    return thisD;
  }

/**
 * @summary Takes the id of the cell and gives it coordinates
 * @param {Number} id
 * @returns {Object} Returns an object with coordinates
 */
  setCoordinates(id) {
    let x = 0;
    let y = 0;
    let coords = {};
    id = id.toString().split('');
    if (id.length == 2) {
      x = Math.floor(id[1]);
      y = Math.floor(id[0]) + 1;
      if (x == 0) {
        x = 10;
        y = Math.floor(id[0]);
      }
    }
    if (id.length == 1) {
      x = Math.floor(id[0]);
      y = 1;
    }
    coords = { 'x': x, 'y': y };
    return coords;
  }
}

export const mazeService = new MazeService();
