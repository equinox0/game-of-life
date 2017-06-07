import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import BottomMenu from './../components/BottomMenu';

import CELLS_SETTINGS from './../constants/InitCellsSettings';

class App extends Component {
  render() {
    return (
      <div>
        <AppBar
          title="Gra w życie"
          showMenuIconButton={false}/>
        <BottomMenu
          cellSettings={CELLS_SETTINGS}/>
      </div>
    );
  }
}

export default App;
