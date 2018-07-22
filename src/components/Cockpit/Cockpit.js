import React from 'react';

const cockpit = (props) => {

    let assignedClasses = [];
    if (props.persons.length <= 2){
        assignedClasses.push('red');
    }
    if (props.persons.length <= 1){
        assignedClasses.push('bold');
    }

    return(
        <div>
            <h1>Hi I'm a react App</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button 
            // style={}
            onClick={this.togglePersonsHandler}>
                Toggle Persons
            </button>
        </div>
    );
}