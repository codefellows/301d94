import React from 'react';
import Person from './Person.js';

class Main extends React.Component {
  render() {
    return (
      <main>
          <Person 
            name="Sheyna"
            hometown="Seattle"
            hairColor="Brown"
          />
          <Person name="David"/>
          <Person name="Rhea"/>
          <Person name="Jordan"/>
        </main>
    );
  }
}

export default Main;
