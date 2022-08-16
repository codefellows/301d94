import React from 'react';
import Person from './Person.js';
import data from './data.json';
import './Main.css';

class Main extends React.Component {
  render() {
    let people = [];
    data.forEach((pep, idx) => {
      console.log(idx);
      people.push(
        <Person
          name={pep.name}
          img={pep.imageURL}
          key={idx}
        />
      )
    });


    return (
      <main>
        {people}
      </main>
    );
  }
}

export default Main;
