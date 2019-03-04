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
        otherState: 'Other values',
        showPersons: false
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

    togglerPersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({
            showPersons: !doesShow
        });
    }

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map(person => {
                        return <Person
                            name={person.name}
                            age={person.age} />
                    })}
                </div>
            );
        }

      return (
        <div className="App">
            <h1>Hi, I'm a React App</h1>

            <button
                style={style}
                onClick={this.togglerPersonsHandler}>Toggle Persons</button>
            {persons}
        </div>
    );
    // return React.createElement('div', null, 'h1', 'Hi, I\'m a React App!!!');
  }
}

export default App;
