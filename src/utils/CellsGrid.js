import GAME_OF_LIFE_CONFIG from './../constants/GameOfLifeConfig';

class CellsGrid {
  constructor(grid = []) {
    this.grid = grid;
  }

  updateCellInGrid(newCell) {
    this.grid = this.grid.map( cell => ( cell.x === newCell.x && cell.y === newCell.y) ? Object.assign(cell, newCell) : cell );
  }

  getCellNeighbors(testedCell) {
    return this.grid.filter( cell => {
      return (
        cell.x === testedCell.x - 1 && cell.y === testedCell.y - 1 ||
        cell.x === testedCell.x && cell.y === testedCell.y - 1 ||
        cell.x === testedCell.x + 1 && cell.y === testedCell.y - 1 ||
        cell.x === testedCell.x - 1 && cell.y === testedCell.y ||
        cell.x === testedCell.x + 1 && cell.y === testedCell.y ||
        cell.x === testedCell.x - 1 && cell.y === testedCell.y + 1 ||
        cell.x === testedCell.x && cell.y === testedCell.y + 1 ||
        cell.x === testedCell.x + 1 && cell.y === testedCell.y + 1
      )
    });
  }

  getAliveCellNeighbors(testedCell) {
    let neighbors = this.getCellNeighbors(testedCell) || [];
    return neighbors.filter( cell => cell.isAlive );
  }

  getNextGenerationGrid() {
    return this.grid.map( cell => {
      let neighbors = this.getAliveCellNeighbors(cell);
      return Object.assign({}, cell, { isAlive: (
        !cell.isAlive && neighbors.length === GAME_OF_LIFE_CONFIG.RESURRECT_NEIGHBORS ||
        cell.isAlive && neighbors.length >= GAME_OF_LIFE_CONFIG.MIN_NEIGHBORS && neighbors.length <= GAME_OF_LIFE_CONFIG.MAX_NEIGHBORS
      ) });
    });
  }
}

export default CellsGrid;
