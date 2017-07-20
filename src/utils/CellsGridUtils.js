import CELLS_GRID_CONFIG from './../constants/CellsGridConfig';
import GAME_OF_LIFE_CONFIG from './../constants/GameOfLifeConfig';

function createCellsGrid(aliveCells = []) {
  let grid = [];
  for(let y = 0; y < CELLS_GRID_CONFIG.NUMBER_OF_ROWS; y++) {
    for(let x = 0; x < CELLS_GRID_CONFIG.NUMBER_OF_COLUMNS; x++) {
      let isAlive = !!aliveCells.find( cell => x === cell.x && y === cell.y );
      grid.push({ x, y, isAlive });
    }
  }
  return grid;
}

function updateCellInGrid(newCell = {}, grid = []) {
  return grid.map( cell => (cell.x === newCell.x && cell.y === newCell.y) ? Object.assign({}, cell, newCell) : cell );
}

function getNextGenerationGrid(grid = []) {
  return grid.map( cell => {
    let aliveNeighbors = _getAliveCellNeighbors(grid, cell);
    return Object.assign({}, cell, { isAlive: (
      !cell.isAlive && aliveNeighbors.length === GAME_OF_LIFE_CONFIG.RESURRECT_NEIGHBORS ||
      cell.isAlive && aliveNeighbors.length >= GAME_OF_LIFE_CONFIG.MIN_NEIGHBORS && aliveNeighbors.length <= GAME_OF_LIFE_CONFIG.MAX_NEIGHBORS
    ) });
  });
}

function _getCellNeighbors(grid = [], testedCell = {}) {
  return grid.filter( cell => {
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

function _getAliveCellNeighbors(grid = [], testedCell = {}) {
  let neighbors = _getCellNeighbors(grid, testedCell) || [];
  return neighbors.filter( cell => cell.isAlive );
}

export { createCellsGrid, updateCellInGrid, getNextGenerationGrid };
