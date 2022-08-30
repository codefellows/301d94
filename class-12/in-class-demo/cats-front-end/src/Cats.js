import React from 'react';
import { Container, Button, ListGroup } from 'react-bootstrap';

class Cats extends React.Component {
  render() {
    let cats = this.props.cats.map(cat => (
      <Cat 
        key={cat._id} 
        cat={cat}
        deleteCat={this.props.deleteCat}
      />
    ));

    return (
      <Container>
        <ListGroup>
          {cats}
        </ListGroup>
      </Container>
    );
  }
}

class Cat extends React.Component {

  // // could have a helper method that calls this:
  // handleDelete = () => {
  //   this.props.deleteCat(this.props.cat._id);
  // }

  render () {
    
    return (
      <ListGroup.Item>
        {this.props.cat.name} is {this.props.cat.color}
        <Button 
          variant='dark' 
          onClick={() => {
            this.props.deleteCat(this.props.cat._id);
          }}
        >
          delete Cat
        </Button>
      </ListGroup.Item>
    )
  }
}

export default Cats;
