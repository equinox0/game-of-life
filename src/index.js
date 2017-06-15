import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MuiTheme from './constants/MuiTheme';
import App from './containers/App';

injectTapEventPlugin();
registerServiceWorker();
ReactDOM.render(
  <MuiThemeProvider muiTheme={MuiTheme}>
    <App />
  </MuiThemeProvider>,
 document.getElementById('root'));
