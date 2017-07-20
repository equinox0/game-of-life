import { createCellsGrid, updateCellInGrid, getNextGenerationGrid } from './CellsGridUtils';
import CELLS_GRID_CONFIG from './../constants/CellsGridConfig';

describe('Cells grid utils', () => {
  let cellsGrid;

  beforeEach(() => {
    cellsGrid = createCellsGrid();
  });

  describe('Creating cells grid', () => {
    describe('Default grid', () => {
      beforeEach(() => {
        cellsGrid = createCellsGrid();
      });

      it('should create grid', () => {
        expect(Array.isArray(cellsGrid)).toEqual(true);
        expect(cellsGrid.length).toEqual(Number(CELLS_GRID_CONFIG.NUMBER_OF_ROWS) * Number(CELLS_GRID_CONFIG.NUMBER_OF_COLUMNS));
      });

      it('should create default grid with all cells not alive', () => {
        cellsGrid.forEach(cell => {
          expect(cell.isAlive).toEqual(false);
        });
      });

      it('should create given number of cells in row (columns - x)', () => {
        for(let y = 0; y < CELLS_GRID_CONFIG.NUMBER_OF_ROWS; y++) {
          let row = cellsGrid.filter(cell => cell.y === y);
          expect(row.length).toEqual(CELLS_GRID_CONFIG.NUMBER_OF_COLUMNS);
        }
      });

      it('should create given number of cells in column (rows - y)', () => {
        for(let x = 0; x < CELLS_GRID_CONFIG.NUMBER_OF_COLUMNS; x++) {
          let column = cellsGrid.filter(cell => cell.x === x);
          expect(column.length).toEqual(CELLS_GRID_CONFIG.NUMBER_OF_ROWS);
        }
      });

      it('should sort cells in grid row by row', () => {
        expect(cellsGrid[0].x).toEqual(0);
        expect(cellsGrid[0].y).toEqual(0);
        expect(cellsGrid[CELLS_GRID_CONFIG.NUMBER_OF_COLUMNS / 2].x).toEqual(CELLS_GRID_CONFIG.NUMBER_OF_COLUMNS / 2);
        expect(cellsGrid[CELLS_GRID_CONFIG.NUMBER_OF_COLUMNS / 2].y).toEqual(0);
        expect(cellsGrid[CELLS_GRID_CONFIG.NUMBER_OF_COLUMNS].x).toEqual(0);
        expect(cellsGrid[CELLS_GRID_CONFIG.NUMBER_OF_COLUMNS].y).toEqual(1);
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

        cellsGrid = createCellsGrid(aliveCells);
      });

      it('it should set given cells as alive', () => {
        aliveCells.forEach( aliveCell => {
          expect(cellsGrid.find( cell => aliveCell.x === cell.x && aliveCell.y === cell.y).isAlive).toEqual(true);
        });
      });

      it('should set all others cells as not alive', () => {
        let notAliveCells = cellsGrid.filter( cell => !cell.isAlive);
        expect(notAliveCells.length).toEqual(Number(CELLS_GRID_CONFIG.NUMBER_OF_ROWS) * Number(CELLS_GRID_CONFIG.NUMBER_OF_COLUMNS) - aliveCells.length);
      });
    });
  });

  describe('Updating cell in grid', () => {
    it('should return updated grid', () => {
      let newGrid = updateCellInGrid(undefined, cellsGrid);
      expect(newGrid.length).toEqual(cellsGrid.length);
    });

    it('should update given cell in grid', () => {
      let newGrid = updateCellInGrid({ x: 0, y: 0, isAlive: true }, cellsGrid);
      expect(cellsGrid[0]).toEqual({ x: 0, y: 0, isAlive: false });
      expect(newGrid[0]).toEqual({ x: 0, y: 0, isAlive: true });
    });

    it('should not update not existing cell', () => {
      let notExistingCell = { x: 99999, y: 99999, isAlive: true }
      let newGrid = updateCellInGrid(notExistingCell, cellsGrid);
      expect(newGrid.find( cell => cell.x === notExistingCell.x && cell.y === notExistingCell.y )).toEqual(undefined);
    });
  });

  describe('Next generation grid', () => {
    beforeEach(() => {
      cellsGrid = createCellsGrid([
        { x: 0, y: 0 },
        { x: 0, y: 1 },
        { x: 1, y: 0 },
        { x: 3, y: 0 },
        { x: 4, y: 0 },
        { x: 4, y: 2 },
      ]);
    });

    it('should return next generation of given grid', () => {
      let nextGenerationGrid = getNextGenerationGrid(cellsGrid);
      expect(nextGenerationGrid.length).toEqual(Number(CELLS_GRID_CONFIG.NUMBER_OF_ROWS) * Number(CELLS_GRID_CONFIG.NUMBER_OF_COLUMNS));
      expect(nextGenerationGrid.find( cell => cell.x === 0 && cell.y === 0).isAlive).toEqual(true);
      expect(nextGenerationGrid.find( cell => cell.x === 0 && cell.y === 1).isAlive).toEqual(true);
      expect(nextGenerationGrid.find( cell => cell.x === 1 && cell.y === 0).isAlive).toEqual(true);
      expect(nextGenerationGrid.find( cell => cell.x === 1 && cell.y === 1).isAlive).toEqual(true);
      expect(nextGenerationGrid.find( cell => cell.x === 3 && cell.y === 1).isAlive).toEqual(true);
      expect(nextGenerationGrid.find( cell => cell.x === 4 && cell.y === 1).isAlive).toEqual(true);
      expect(nextGenerationGrid).not.toEqual(cellsGrid);
    });

    it('should return same grid if all cells are not alive', () => {
      cellsGrid = createCellsGrid();
      let nextGenerationGrid = getNextGenerationGrid(cellsGrid);
      expect(nextGenerationGrid).toEqual(cellsGrid);
    });
  });
});
