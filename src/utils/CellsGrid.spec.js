import CellsGrid from './CellsGrid';
import CellsGridFactory from './CellsGridFactory';
import CELLS_GRID_CONFIG from './../constants/CellsGridConfig';

describe('CellsGrid', () => {
  let cellsGrid,
  aliveCells;

  beforeEach(() => {
    aliveCells = [
      { x: 18, y: 1 },
      { x: 26, y: 5 },
      { x: 16, y: 3 },
      { x: 6, y: 12 },
      { x: 22, y: 8 },
    ];
    cellsGrid = new CellsGridFactory().createCellsGrid(aliveCells);
  });

  it('return current grid', () => {
    expect(cellsGrid.grid.filter( cell => cell.isAlive ).length).toEqual(aliveCells.length)
    expect(cellsGrid.grid.filter( cell => !cell.isAlive ).length).toEqual(Number(CELLS_GRID_CONFIG.NUMBER_OF_ROWS) * Number(CELLS_GRID_CONFIG.NUMBER_OF_COLUMNS) - aliveCells.length);
  });

  it('should set new grid', () => {
    cellsGrid.grid = cellsGrid.grid.map( cell => Object.assign(cell, { isAlive: true }));
    expect(cellsGrid.grid.filter( cell => cell.isAlive ).length).toEqual(Number(CELLS_GRID_CONFIG.NUMBER_OF_ROWS) * Number(CELLS_GRID_CONFIG.NUMBER_OF_COLUMNS));
  });

  describe('Updating cell in grid', () => {
    it('should update given cell in grid', () => {
      expect(cellsGrid.grid[0]).toEqual({ x: 0, y: 0, isAlive: false });
      cellsGrid.updateCellInGrid({ x: 0, y: 0, isAlive: true });
      expect(cellsGrid.grid[0]).toEqual({ x: 0, y: 0, isAlive: true });
    });

    it('should not update not existing cell', () => {
      let notExistingCell = { x: 99999, y: 99999, isAlive: true }
      cellsGrid.updateCellInGrid(notExistingCell);
      expect(cellsGrid.grid.find( cell => cell.x === notExistingCell.x && cell.y === notExistingCell.y )).toEqual(undefined);
    });
  });

  describe('Returning neighbors', () => {
    it('should return neighbors of border cell', () => {
      let searchCell = { x: 0, y: 0 };
      let cellNeighbors = cellsGrid.getCellNeighbors(searchCell);
      expect(cellNeighbors.length).toEqual(3);
      expect(cellNeighbors.find( cell => cell.x === 1 && cell.y === 0 )).toBeDefined();
      expect(cellNeighbors.find( cell => cell.x === 1 && cell.y === 1 )).toBeDefined();
      expect(cellNeighbors.find( cell => cell.x === 0 && cell.y === 1 )).toBeDefined();
    });

    it('should return neighbors of internal cell', () => {
      let searchCell = { x: 6, y: 6 };
      let cellNeighbors = cellsGrid.getCellNeighbors(searchCell);
      expect(cellNeighbors.length).toEqual(8);
      expect(cellNeighbors.find( cell => cell.x === 5 && cell.y === 5 )).toBeDefined();
      expect(cellNeighbors.find( cell => cell.x === 6 && cell.y === 5 )).toBeDefined();
      expect(cellNeighbors.find( cell => cell.x === 7 && cell.y === 5 )).toBeDefined();
      expect(cellNeighbors.find( cell => cell.x === 5 && cell.y === 6 )).toBeDefined();
      expect(cellNeighbors.find( cell => cell.x === 7 && cell.y === 6 )).toBeDefined();
      expect(cellNeighbors.find( cell => cell.x === 5 && cell.y === 7 )).toBeDefined();
      expect(cellNeighbors.find( cell => cell.x === 6 && cell.y === 7 )).toBeDefined();
      expect(cellNeighbors.find( cell => cell.x === 7 && cell.y === 7 )).toBeDefined();
    });

    it('should return alive neighbors', () => {
      cellsGrid = new CellsGridFactory().createCellsGrid([
        { x: 5, y: 5 },
        { x: 6, y: 5 },
        { x: 7, y: 5 }
      ]);
      let searchCell = { x: 6, y: 6 }
      let aliveNeighbors = cellsGrid.getAliveCellNeighbors(searchCell);
      expect(aliveNeighbors.length).toEqual(3);
      expect(aliveNeighbors.find( cell => cell.x === 5 && cell.y === 5 )).toBeDefined();
      expect(aliveNeighbors.find( cell => cell.x === 6 && cell.y === 5 )).toBeDefined();
      expect(aliveNeighbors.find( cell => cell.x === 7 && cell.y === 5 )).toBeDefined();
    });
  });

  it('should return grid of next generation', () => {
    cellsGrid = new CellsGridFactory().createCellsGrid([
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 0 },
      { x: 3, y: 0 },
      { x: 4, y: 0 },
      { x: 4, y: 2 },
    ]);
    let nextGenerationGrid = cellsGrid.getNextGenerationGrid();
    expect(nextGenerationGrid.length).toEqual(Number(CELLS_GRID_CONFIG.NUMBER_OF_ROWS) * Number(CELLS_GRID_CONFIG.NUMBER_OF_COLUMNS));
    expect(nextGenerationGrid.find( cell => cell.x === 0 && cell.y === 0).isAlive).toEqual(true);
    expect(nextGenerationGrid.find( cell => cell.x === 0 && cell.y === 1).isAlive).toEqual(true);
    expect(nextGenerationGrid.find( cell => cell.x === 1 && cell.y === 0).isAlive).toEqual(true);
    expect(nextGenerationGrid.find( cell => cell.x === 1 && cell.y === 1).isAlive).toEqual(true);
    expect(nextGenerationGrid.find( cell => cell.x === 3 && cell.y === 1).isAlive).toEqual(true);
    expect(nextGenerationGrid.find( cell => cell.x === 4 && cell.y === 1).isAlive).toEqual(true);
    expect(cellsGrid.grid.filter( cell => !cell.isAlive ).length).toEqual(Number(CELLS_GRID_CONFIG.NUMBER_OF_ROWS) * Number(CELLS_GRID_CONFIG.NUMBER_OF_COLUMNS) - 6);
  });
});
