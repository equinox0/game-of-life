import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem  from 'material-ui/MenuItem';

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
const selectFieldStyle = {
  marginLeft: '12px'
}

class BottomMenu extends Component {
  constructor() {
    super();
    this.state = {};
  }

  cellSettingChanged(event, index, value) {
    this.setState({ initSetting: value });
  }

  render() {
    return (
      <Paper
        zDepth={2}
        style={paperStyle}>
        <RaisedButton
          label="Start"
          primary={true}
          style={buttonStyle}/>
        <RaisedButton
          label="Stop"
          primary={true}
          style={buttonStyle}/>
        <SelectField
          hintText="Ustawienia początkowe"
          style={selectFieldStyle}
          value={this.state.initSetting}
          onChange={this.cellSettingChanged.bind(this)}>
          { this.props.cellSettings.map( (setting) => <MenuItem key={setting.name} value={setting} primaryText={setting.name}/> ) }
        </SelectField>
      </Paper>
    );
  }
}

export default BottomMenu;
