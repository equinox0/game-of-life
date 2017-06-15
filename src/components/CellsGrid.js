import React, { Component } from 'react';
import Cell from './Cell';
import './../styles/CellsGrid.css';

class CellsGrid extends Component {
  render() {
    return (
      <div className='cells-grid'>
        <h1>Is running: { this.props.isRunning.toString() }</h1>
        <h1>Example cells:</h1>
        <span>Alive: </span>
        <Cell isAlive={true}/>
        <br/>
        <span>Dead: </span>
        <Cell isAlive={false}/>
        <br/>
        <span>Editable: </span>
        <Cell isAlive={true} isEditable={true}/>
        <Cell isAlive={false} isEditable={true}/>
      </div>
    );
  }
}

export default CellsGrid;
