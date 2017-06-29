import Cell from './Cell';

describe('Cell', () => {
    let cell;

    it('should create default instance', () => {
      cell = new Cell();
      expect(cell.x).toEqual(0);
      expect(cell.y).toEqual(0);
      expect(cell.isAlive).toEqual(false);
    });

    it('should create cell isntance', () => {
      cell = new Cell(10, 12, true);
      expect(cell.x).toEqual(10);
      expect(cell.y).toEqual(12);
      expect(cell.isAlive).toEqual(true);
    });
});
