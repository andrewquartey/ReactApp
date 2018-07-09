import React, { Component } from 'react';
import './App.css';
import Person from './components/Person';

class App extends Component {
  
  state = {
    persons: [
      { id: 'ffad3', name:'Andrew', age:28 },
      { id: 'fda324', name:'King', age:38 },
      { id: 'faaw1', name:'Yestrup', age:23 }
    ],
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    var personIndex = this.state.persons.findIndex((person) => {
      return person.id === id;
    });

   const person = {
     ...this.state.persons[personIndex]
   };

   person.name = event.target.value;

   const persons = [...this.state.persons];

   persons[personIndex] = person;

   this.setState({persons})
  };

  togglePersonsHandler = () =>   {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };
 
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons}); 
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid #333',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
             return ( 
              <Person 
                  click={() => this.deletePersonHandler(index)} 
                  changed={(event) => this.nameChangedHandler(event, person.id)}
                  name={person.name} 
                  age={person.age}
                  key={person.id}
                  />
             );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi I'm a react App</h1>
        <p>This is really working</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>
            Toggle Persons
        </button>

        {persons}
      </div>
      // <div className="App">
      //   <h1>Hello there</h1>
      // </div>  
    );
  }
}

export default App;