import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium from 'radium'

class App extends Component {
    state = {
        persons: [
            { id: 'sffa', name: 'Bob', age: 35 },
            { id: '3fsf', name: 'Mary', age: 7 },
            { id: 'kde3', name: 'Riley', age: 59 }
        ],
        otherState: 'Other values',
        showPersons: false
    }

    switchNameHandler = (newName) => {
        // console.log('Was Clicked!');
        // DON'T DO THIS this.state.persons[0].name = 'Robert';
        this.setState({
            persons: [
                { name: newName, age: 35 },
                { name: 'Mary', age: 7 },
                { name: 'Riley', age: 60 }
            ]
        })
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });
        const person = {
            ...this.state.persons[personIndex]
        };
        // const person = Object.assign({}, this.state.persons[personIndex]);
        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState( {persons: persons} )
    }

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }

    togglerPersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({
            showPersons: !doesShow
        });
    }

    render() {
        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                        click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age} 
                            key={person.id}
                            changed={(event) => this.nameChangedHandler(event, person.id)}
                            />
                    })}
                </div>
            );
            style.backgroundColor = 'blue'
        }

        let classes = []; 
        if (this.state.persons.length <= 2) {
            classes.push('red');
        }
        if (this.state.persons.length <= 1) {
            classes.push('bold');
        }

      return (
        <div className="App">
            <h1>Hi, I'm a React App</h1>
            <p className={classes.join(' ')}>3 or more</p>

            <button
                style={style}
                onClick={this.togglerPersonsHandler}>Toggle Persons</button>
            {persons}
        </div>
    );
    // return React.createElement('div', null, 'h1', 'Hi, I\'m a React App!!!');
  }
}

export default Radium(App);
