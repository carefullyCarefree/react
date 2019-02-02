import React, { Component } from 'react';
import './App.css';
import UserInput from './user/UserInput';
import UserOutput from './user/UserOutput';

class App extends Component {
    state = {
        usernames: [
            'Larr', 'Wies', 'Mel'
        ]
    }
    weirdHandler = (newName) => {
        this.setState ({
            usernames: [
                'Larr', newName.target.value, 'Wies', 'Mel'
            ]
        });
    }
  render() {
    return (
      <div className="App">
        <UserOutput username={this.state.usernames[1]}/>
        <UserInput changeName={this.weirdHandler}/>
      </div>
    );
  }
}

export default App;
