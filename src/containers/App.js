import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import BottomMenu from './../components/BottomMenu';
import SettingsDrawer from './../components/SettingsDrawer';

import CELLS_SETTINGS from './../constants/InitCellsSettings';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isRunning: false,
      isDrawerOpen: false,
      currentCellSetting: CELLS_SETTINGS.find((setting) => setting.name.toUpperCase() === 'CLEAR')
    }
  }

  toggleDrawer() {
    if(!this.state.isRunning) {
      this.setState({ isDrawerOpen: !this.state.isDrawerOpen });
    }
  }

  handleOpenChange(open) {
    this.setState({ isDrawerOpen: open });
  }

  handleCellSettingChange(setting) {
    this.setState({ currentCellSetting: setting });
  }

  handleRunningChange(isRunning) {
    this.setState({ isRunning });
  }

  handleReset() {
    this.setState({ currentCellSetting: CELLS_SETTINGS.find((setting) => setting.name === this.state.currentCellSetting.name) });
  }

  render() {
    return (
      <div>
        <AppBar
          title="Gra w życie"
          onLeftIconButtonTouchTap={ this.toggleDrawer.bind(this) }/>
        <h1>Is running: { this.state.isRunning.toString() }</h1>
        <SettingsDrawer
          isOpen={ this.state.isDrawerOpen }
          onOpenChange={ this.handleOpenChange.bind(this) }
          cellSettings={ CELLS_SETTINGS }
          currentCellSetting={ this.state.currentCellSetting }
          onCellSettingChange={ this.handleCellSettingChange.bind(this) }/>
        <BottomMenu
          isRunning={ this.state.isRunning }
          onRunningChange={ this.handleRunningChange.bind(this) }
          onReset={ this.handleReset.bind(this) } />
      </div>
    );
  }
}

export default App;
