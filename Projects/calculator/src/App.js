import React from 'react';
import './App.css';
import Calc from './Calc'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      display: ''
    }
  }

  calculate = () => {

  }

  reset = () => {

  }

  backspace = () => {
    
  }

  clickHandler = (event) => {

    this.setState({
      display: event
    })
  }

  render() {
    return (
      <div className="App">
        <Calc
          onClick={this.clickHandler}
          display={this.state.display}
        />
      </div>
    );
  }
  
}

export default App;
