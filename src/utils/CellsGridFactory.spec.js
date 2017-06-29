import CellsGridFactory from './CellsGridFactory';
import CellsGrid from './CellsGrid';
import CELLS_GRID_CONFIG from './../constants/CellsGridConfig';

describe('Cells grid factory', () => {
  let cellsGridFactory;

  beforeEach(() => {
    cellsGridFactory = new CellsGridFactory();
  })

  describe('Creating', () => {
    let cellsGrid;

    describe('Default grid', () => {
      beforeEach(() => {
        cellsGrid = cellsGridFactory.createCellsGrid();
      });

      it('should create grid', () => {
        expect(cellsGrid instanceof CellsGrid).toEqual(true);
        expect(Array.isArray(cellsGrid.grid)).toEqual(true);
        expect(cellsGrid.grid.length).toEqual(Number(CELLS_GRID_CONFIG.NUMBER_OF_ROWS) * Number(CELLS_GRID_CONFIG.NUMBER_OF_COLUMNS));
      });

      it('should create default grid with all cells not alive', () => {
        cellsGrid.grid.forEach((cell) => {
          expect(cell.isAlive).toEqual(false);
        });
      });

      it('should create given number of cells in row (columns - x)', () => {
        for(let y = 0; y < CELLS_GRID_CONFIG.NUMBER_OF_ROWS; y++) {
          let row = cellsGrid.grid.filter(cell => cell.y === y);
          expect(row.length).toEqual(CELLS_GRID_CONFIG.NUMBER_OF_COLUMNS);
        }
      });

      it('should create given number of cells in column (rows - y)', () => {
        for(let x = 0; x < CELLS_GRID_CONFIG.NUMBER_OF_COLUMNS; x++) {
          let column = cellsGrid.grid.filter(cell => cell.x === x);
          expect(column.length).toEqual(CELLS_GRID_CONFIG.NUMBER_OF_ROWS);
        }
      });

      it('should sort cells in grid row by row', () => {
        expect(cellsGrid.grid[0].x).toEqual(0);
        expect(cellsGrid.grid[0].y).toEqual(0);
        expect(cellsGrid.grid[CELLS_GRID_CONFIG.NUMBER_OF_COLUMNS / 2].x).toEqual(CELLS_GRID_CONFIG.NUMBER_OF_COLUMNS / 2);
        expect(cellsGrid.grid[CELLS_GRID_CONFIG.NUMBER_OF_COLUMNS / 2].y).toEqual(0);
        expect(cellsGrid.grid[CELLS_GRID_CONFIG.NUMBER_OF_COLUMNS].x).toEqual(0);
        expect(cellsGrid.grid[CELLS_GRID_CONFIG.NUMBER_OF_COLUMNS].y).toEqual(1);
      });
    });

    xdescribe('Grid with alive cells given', () => {
      let aliveCells;

      beforeEach(() => {
        aliveCells = [
          { x: 18, y: 1 },
          { x: 26, y: 5 },
          { x: 16, y: 3 },
          { x: 6, y: 12 },
          { x: 22, y: 8 },
        ];

        grid = cellsGridFactory.createCellsGrid(aliveCells);
      });

      it('it should set given cells as alive', () => {
        aliveCells.forEach( aliveCell => {
          expect(cellsGrid.grid.find( cell => aliveCell.x === cell.x && aliveCell.y === cell.y).isAlive).toEqual(true);
        });
      });

      it('should set all others cells as not alive', () => {
        let notAliveCells = cellsGrid.grid.filter( cell => !cell.isAlive);
        expect(notAliveCells.length).toEqual(Number(CELLS_GRID_CONFIG.NUMBER_OF_ROWS) * Number(CELLS_GRID_CONFIG.NUMBER_OF_COLUMNS) - aliveCells.length);
      });
    });
  });
});
