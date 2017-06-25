import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import BottomMenu from './../components/BottomMenu';
import CellsGrid from './../components/CellsGrid';
import SettingsDrawer from './../components/SettingsDrawer';
import CELLS_SETTINGS from './../constants/CellsSettings';
import CellsFactory from './../utils/CellsFactory';

import './../styles/App.css'
import './../styles/Style.css'

class App extends Component {
  constructor(props) {
    super(props);

    this.cellsFactory = new CellsFactory();
    let clearSetting = CELLS_SETTINGS.find( setting => setting.name.toUpperCase() === 'CLEAR' );

    this.state = {
      isRunning: false,
      areCellsEditable: false,
      isDrawerOpen: false,
      grid: this.cellsFactory.createCellsGrid( clearSetting.aliveCells ),
      currentCellSetting: clearSetting
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
    if(setting.name !== this.state.currentCellSetting.name) {
      this.setState({
        grid: this.cellsFactory.createCellsGrid( setting.aliveCells ),
        currentCellSetting: setting
      });
    }
  }

  handleCellsEditableChange(editable) {
    this.setState({ areCellsEditable: editable });
  }

  handleCellClicked(cell) {
    if(this.state.areCellsEditable) {
      let newCell = Object.assign({}, cell, { isAlive: !cell.isAlive });
      this.setState({ grid: this.cellsFactory.updateCellInGrid(this.state.grid, newCell) });
    }
  }

  handleRunningChange(isRunning) {
    this.setState({ isRunning });
  }

  handleReset() {
    this.setState({ grid: this.cellsFactory.createCellsGrid( this.state.currentCellSetting.aliveCells ) });
  }

  render() {
    return (
      <div className="app">
        <div className="layout">
          <AppBar
            title="Gra w życie"
            onLeftIconButtonTouchTap={ this.toggleDrawer.bind(this) }/>
          <div className="content">
            <CellsGrid
              grid={ this.state.grid }
              isRunning={ this.state.isRunning }
              isEditable={ this.state.areCellsEditable }
              onCellClicked={ this.handleCellClicked.bind(this) } />
          </div>
          <BottomMenu
            isRunning={ this.state.isRunning }
            onRunningChange={ this.handleRunningChange.bind(this) }
            onReset={ this.handleReset.bind(this) }/>
        </div>
        <SettingsDrawer
          isOpen={ this.state.isDrawerOpen }
          onOpenChange={ this.handleOpenChange.bind(this) }
          cellSettings={ CELLS_SETTINGS }
          currentCellSetting={ this.state.currentCellSetting }
          onCellSettingChange={ this.handleCellSettingChange.bind(this) }
          areCellsEditable={ this.state.areCellsEditable }
          onCellsEditableChange={ this.handleCellsEditableChange.bind(this) }/>
      </div>
    );
  }
}

export default App;
