import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        people: [
            { name: 'Bob', age: 35 },
            { name: 'Mary', age: 7 },
            { name: 'Riley', age: 59 }
        ],
        otherState: 'Other values'
    }

    switchNameHandler = (newName) => {
        // console.log('Was Clicked!');
        // DON'T DO THIS this.state.people[0].name = 'Robert';
        this.setState({
            people: [
                { name: newName, age: 35 },
                { name: 'Mary', age: 7 },
                { name: 'Riley', age: 60 }
            ]
        })
    }

    nameChangedHandler = (event) => {
        this.setState({
            people: [
                { name: 'Bob', age: 35 },
                { name: event.target.value, age: 7 },
                { name: 'Riley', age: 60 }
            ]
        })
    }

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

      return (
        <div className="App">
            <h1>Hi, I'm a React App</h1>

            <button
                style={style}
                onClick={() => this.switchNameHandler('Robert')}>Switch name</button>
            <Person
                name={this.state.people[0].name}
                age={this.state.people[0].age}/>
            <Person
                name={this.state.people[1].name}
                age={this.state.people[1].age}
                click={this.switchNameHandler.bind(this, 'Bill')}
                changed={this.nameChangedHandler} > My hobbies: eating chicken</Person>
            <Person
                name={this.state.people[2].name}
                age={this.state.people[2].age}/>
        </div>
    );
    // return React.createElement('div', null, 'h1', 'Hi, I\'m a React App!!!');
  }
}

export default App;
