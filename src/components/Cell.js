import React, { Component } from 'react';
import './../styles/Cell.css';

class Cell extends Component {
  render() {
    this.classes = 'cell';
    this.classes += this.props.isAlive ? ' alive' : ' dead';
    this.classes += this.props.isEditable ? ' editable' : '';
    
    return (
      <div className={ this.classes }>
      </div>
    );
  }
}

export default Cell;
