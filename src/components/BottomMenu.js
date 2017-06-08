import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

const buttonStyle = {
  margin: '6px 0 6px 12px'
};
const paperStyle = {
  width: '100%',
  position: 'fixed',
  bottom: '2px',
  display: 'flex',
  alignItems: 'flex-end'
};

class BottomMenu extends Component {

  startClicked() {
    this.props.onRunningChange(true);
  }

  stopClicked() {
    this.props.onRunningChange(false);
  }

  resetClicked() {
    this.props.onReset();
  }

  render() {
    return (
      <Paper
        zDepth={2}
        style={ paperStyle }>
        <RaisedButton
          onTouchTap={ this.startClicked.bind(this) }
          disabled={ this.props.isRunning }
          label="Start"
          primary={true}
          style={ buttonStyle }/>
        <RaisedButton
          onTouchTap={ this.stopClicked.bind(this) }
          disabled={ !this.props.isRunning }
          label="Stop"
          primary={true}
          style={ buttonStyle }/>
        <FlatButton
          onTouchTap={ this.resetClicked.bind(this) }
          disabled={ this.props.isRunning }
          label="Resetuj"
          primary={true}
          style={ buttonStyle }/>
      </Paper>
    );
  }
}

export default BottomMenu;
