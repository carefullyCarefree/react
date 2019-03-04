import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
    state = {
        username: 'Larr'
    }
    weirdHandler = (event) => {
        this.setState({username: event.target.value})
    }
  render() {
    return (
      <div className="App">
        <UserOutput username="Bill" />
        {/* <UserOutput oldName={this.state.usernames[1]} username={this.weirdHandler}/> */}
        <UserOutput username={this.state.username} />
        <UserInput changeName={this.weirdHandler} currentName={this.state.username}/>
      </div>
    );
  }
}

export default App;
