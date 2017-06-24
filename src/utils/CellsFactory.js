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

  updateCellInGrid(currentGrid, newCell) {
    return currentGrid.map( cell => {
      return (!!newCell && newCell.x === cell.x && newCell.y === cell.y) ? Object.assign({}, cell, newCell) : Object.assign({}, cell);
    });
  }
}

export default CellsFactory;
