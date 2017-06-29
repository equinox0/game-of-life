import CELLS_GRID_CONFIG from './../constants/CellsGridConfig';
import CellsGrid from './CellsGrid';

class CellsGridFactory {
  createCellsGrid(aliveCells = []) {
    let grid = [];
    for(let y = 0; y < CELLS_GRID_CONFIG.NUMBER_OF_ROWS; y++) {
      for(let x = 0; x < CELLS_GRID_CONFIG.NUMBER_OF_COLUMNS; x++) {
        let isAlive = !!aliveCells.find( cell => x === cell.x && y === cell.y );
        grid.push({ x, y, isAlive });
      }
    }
    return new CellsGrid(grid);
  }
}

export default CellsGridFactory;
