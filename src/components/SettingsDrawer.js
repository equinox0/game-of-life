import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Toggle from 'material-ui/Toggle';

class SettingsDrawer extends Component {
  handleRequestChange(open, reason) {
    this.props.onOpenChange(open);
  }

  handleSettingChange(event, index, value) {
    this.props.onCellSettingChange(value)
  }

  handleEditableToggleChange(event, isChecked) {
    this.props.onCellsEditableChange(isChecked);
  }

  render() {
    let menuElementStyle = { margin: '0 5%', width: '90%' };
    return (
      <Drawer
        docked={ false }
        openSecondary={ true }
        open={ this.props.isOpen }
        onRequestChange={ this.handleRequestChange.bind(this) }>
        <SelectField
          style={ menuElementStyle }
          hintText="Ustawienia początkowe"
          value={ this.props.currentCellSetting }
          onChange={ this.handleSettingChange.bind(this) }>
          { this.props.cellSettings.map( setting => <MenuItem key={ setting.name } value={ setting } primaryText={ setting.name }/> ) }
        </SelectField>
        <Toggle
          label="Edycja komórek"
          toggled={ this.props.areCellsEditable }
          style={ menuElementStyle }
          onToggle={ this.handleEditableToggleChange.bind(this) }/>
      </Drawer>
    );
  }
}

export default SettingsDrawer;
