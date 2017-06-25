import React, { Component } from 'react';
import Cell from './Cell';
import './../styles/CellsGrid.css';

class CellsGrid extends Component {
  handleCellClicked(cell) {
    this.props.onCellClicked(cell);
  }

  render() {
    return (
      <div className='cells-grid'>
        {
          this.props.grid.map( (cell, index) => (
            <Cell
              key={ index }
              cell={ cell }
              isEditable={ this.props.isEditable }
              onCellClicked={ this.handleCellClicked.bind(this) }/>
          ))
        }
      </div>
    );
  }
}

export default CellsGrid;
