import React, { Component } from 'react';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import Char from './Char/Char'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
  }
  

  changeHandler = (event) => {
    const {value} = event.target
    this.setState({
      input: value
    })
  }

  deleteHandler = (index) => {
    const text = this.state.input.split('')
    text.splice(index, 1)
    const updatedText = text.join('')
    this.setState({input: updatedText})
  }


  render() {

    const charList = this.state.input.split('').map((ch, index) => {
      return <Char 
        character={ch} 
        key={index} 
        clicked={() => this.deleteHandler(index)}
        />
    })

    return (
      <div className="App">
        <input
            name="input"
            value={this.state.input}
            placeholder="Let's count characters"
            type="text"
            onChange={this.changeHandler}
        />
        <ValidationComponent inputLength={this.state.input.length}/>
        <br />
        {charList}
      </div>
    )
  }
}

export default App;
