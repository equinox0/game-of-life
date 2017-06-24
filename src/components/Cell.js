import React, { Component } from 'react';
import './../styles/Cell.css';

class Cell extends Component {
  handleCellClicked() {
    this.props.onCellClicked(this.props.cell);
  }

  render() {
    this.classes = 'cell';
    this.classes += this.props.cell.isAlive ? ' alive' : ' dead';
    this.classes += this.props.isEditable ? ' editable' : '';

    return (
      <div
        className={ this.classes }
        onClick={ this.handleCellClicked.bind(this) }>
      </div>
    );
  }
}

export default Cell;
