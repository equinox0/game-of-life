import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class SettingsDrawer extends Component {
  
  handleSettingChange(event, index, value) {
    this.props.onCellSettingChange(value)
  }

  handleRequestChange(open, reason) {
    this.props.onOpenChange(open);
  }

  render() {
    return (
      <Drawer
        docked={false}
        openSecondary={true}
        open={this.props.isOpen}
        onRequestChange={this.handleRequestChange.bind(this)}>
        <SelectField
          style={{margin: '0 5%', width: '90%'}}
          hintText="Ustawienia początkowe"
          value={this.props.currentCellSetting}
          onChange={this.handleSettingChange.bind(this)}>
          { this.props.cellSettings.map( (setting) => <MenuItem key={setting.name} value={setting} primaryText={setting.name}/> ) }
        </SelectField>
      </Drawer>
    );
  }
}

export default SettingsDrawer;
