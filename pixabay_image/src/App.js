import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './Components/Navbar/Navbar';
import Search from './Components/Search/Search';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Navbar />
          <Search />
        </div>
      </MuiThemeProvider>
      
    );
  }
}

export default App;
