import React, { Component } from 'react';
import Cell from './Cell';
import './../styles/CellsGrid.css';

class CellsGrid extends Component {
  drawTestCells() {
    let cells = [];
    for(let i = 0; i < 640; i++) {
      cells.push(<Cell isAlive={ true } isEditable={ false } />);
    }
    return cells;
  }

  render() {
    return (
      <div className='cells-grid'>
        { this.drawTestCells() }
      </div>
    );
  }
}

export default CellsGrid;
