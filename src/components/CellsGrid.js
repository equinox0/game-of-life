import React, { Component } from 'react';
import Cell from './Cell';
import './../styles/CellsGrid.css';
import CellsFactory from './../utils/CellsFactory';

class CellsGrid extends Component {
  constructor(props) {
    super(props);
    this.cellsFactory = new CellsFactory();
    this.state = {
      grid: this.cellsFactory.createCellsGrid( props.cellSetting.aliveCells ),
      currentSetting: this.props.cellSetting
    };
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.cellSetting.name !== this.state.currentSetting.name) {
      this.setState({
        grid: this.cellsFactory.createCellsGrid( nextProps.cellSetting.aliveCells ),
        currentSetting: nextProps.cellSetting
      });
    }
  }

  handleCellClicked(cell) {
    let newCell = Object.assign({}, cell, { isAlive: !cell.isAlive });
    this.setState({ grid: this.cellsFactory.updateCellInGrid(this.state.grid, newCell) });
  }

  render() {
    return (
      <div className='cells-grid'>
        {
          this.state.grid.map( (cell, index) => (
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
