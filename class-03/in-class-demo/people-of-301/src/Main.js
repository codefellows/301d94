import React from 'react';
import Person from './Person.js';
import { Container, Row } from 'react-bootstrap';
import './Main.css';

class Main extends React.Component {
  render() {
    // console.log(this.props)
    let people = this.props.data.map((pep, idx) => {
        return <Person
          name={pep.name}
          img={pep.imageURL}
          key={idx}
          handleHeart={this.props.handleHeart}
          handleShowModal={this.props.handleShowModal}
        />
    });


    return (
      <main>
      <Container>
      <Row xs={1} sm={2} md={3} lg={4}>
        {people}
        </Row>
        </Container>
      </main>
    );
  }
}

export default Main;
