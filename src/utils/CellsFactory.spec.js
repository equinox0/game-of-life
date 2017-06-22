import CellsFactory from './CellsFactory';
import CELLS_GRID_CONFIG from './../constants/CellsGridConfig';

describe('Cells factory', () => {
  let cellsFactory,
  grid;

  beforeEach(() => {
    cellsFactory = new CellsFactory();
  })

  describe('Default grid', () => {
    beforeEach(() => {
      grid = cellsFactory.createCellsGrid();
    });

    it('should create grid', () => {
      expect(Array.isArray(grid)).toEqual(true);
      expect(grid.length).toEqual(Number(CELLS_GRID_CONFIG.NUMBER_OF_ROWS) * Number(CELLS_GRID_CONFIG.NUMBER_OF_COLUMNS));
    });

    it('should create default grid with all cells not alive', () => {
      grid.forEach((cell) => {
        expect(cell.isAlive).toEqual(false);
      });
    });

    it('should create given number of cells in row (columns - x)', () => {
      for(let y = 0; y < CELLS_GRID_CONFIG.NUMBER_OF_ROWS; y++) {
        let row = grid.filter(cell => cell.y === y);
        expect(row.length).toEqual(CELLS_GRID_CONFIG.NUMBER_OF_COLUMNS);
      }
    });

    it('should create given number of cells in column (rows - y)', () => {
      for(let x = 0; x < CELLS_GRID_CONFIG.NUMBER_OF_COLUMNS; x++) {
        let column = grid.filter(cell => cell.x === x);
        expect(column.length).toEqual(CELLS_GRID_CONFIG.NUMBER_OF_ROWS);
      }
    });
  });

  describe('Grid with alive cells given', () => {
    let aliveCells;

    beforeEach(() => {
      aliveCells = [
        { x: 18, y: 1 },
        { x: 26, y: 5 },
        { x: 16, y: 3 },
        { x: 6, y: 12 },
        { x: 22, y: 8 },
      ];

      grid = cellsFactory.createCellsGrid(aliveCells);
    });

    it('it should set given cells as alive', () => {
      aliveCells.forEach( aliveCell => {
        expect(grid.find( cell => aliveCell.x === cell.x && aliveCell.y === cell.y).isAlive).toEqual(true);
      });
    });

    it('should set all others cells as not alive', () => {
      let notAliveCells = grid.filter( cell => !cell.isAlive);
      expect(notAliveCells.length).toEqual(Number(CELLS_GRID_CONFIG.NUMBER_OF_ROWS) * Number(CELLS_GRID_CONFIG.NUMBER_OF_COLUMNS) - aliveCells.length);
    });
  });
});