import React, { Component } from 'react';
import './App.css';
import Search from './Components/Search'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Weather API</h1>
        <Search />
      </div>
    );
  }
}

export default App;
