import CELLS_GRID_CONFIG from './../constants/CellsGridConfig';

class CellsFactory {
  createCellsGrid(aliveCells = []) {
    let grid = [];
    for(let y = 0; y < CELLS_GRID_CONFIG.NUMBER_OF_ROWS; y++) {
      for(let x = 0; x < CELLS_GRID_CONFIG.NUMBER_OF_COLUMNS; x++) {
        let isAlive = !!aliveCells.find( cell => x === cell.x && y === cell.y );
        grid.push({ x, y, isAlive });
      }
    }
    return grid;
  }
}

export default CellsFactory;
