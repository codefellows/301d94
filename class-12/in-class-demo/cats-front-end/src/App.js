import React from 'react';
import axios from 'axios';
import { Button, Container, Form } from 'react-bootstrap';
import Cats from './Cats';
import './App.css';

let SERVER = process.env.REACT_APP_SERVER;

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cats: []
    }
  }

  getCats = async () => {
    try {
      let results = await axios.get(`${SERVER}/cats`);
      this.setState({
        cats: results.data
      });
    } catch(error){
      console.log('we have an error: ', error.response.data)
    }
  }

  postCat = async (cat) => {
    try {
      let url = `${SERVER}/cats`;
      // axois.post takes in the URL and the object we want to add to the database
      let createdCat = await axios.post(url, cat);
      console.log(createdCat.data);
      // this.getCats();
      this.setState({
        cats: [...this.state.cats, createdCat.data]
      });
    } catch(err) {
      console.log('We have an error: ', err.response.data);
    }
  }

  deleteCat = async (id) => {
    try {
      let url = `${SERVER}/cats/${id}`;
      await axios.delete(url);
      // this.getCats();
      let updatedCats = this.state.cats.filter(cat => cat._id !== id);
      this.setState({
        cats: updatedCats
      });
    } catch(err) {
      console.log('We have an error: ', err.response.data);
    }
  }

  handleCatSubmit = (e) => {
    e.preventDefault();
    let cat = {
      name: e.target.name.value,
      color: e.target.color.value,
      spayNeuter: e.target.spayNeuter.checked,
      location: e.target.location.value
    };
    this.postCat(cat);
  }

  // next effect: when the components loads it has all it needs. The data will be deplayed
  componentDidMount() {
    this.getCats();
    
  }

  render() {

    return (
      <>
        <header>
          <h1>Cool Cats</h1>
        </header>
        <main>
          {
            this.state.cats.length > 0 &&
            <Cats 
              cats={this.state.cats}
              deleteCat={this.deleteCat}
            />
          }
          <Container className="mt-5">
            <Form onSubmit={this.handleCatSubmit}>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="color">
                <Form.Label>Color</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="location">
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="spayNeuter">
                <Form.Check type="checkbox" label="spay-neuter" />
              </Form.Group>
              <Button type="submit">Add Cat</Button>
            </Form>
          </Container>
        </main>
      </>
    );
  }
}

export default App;
