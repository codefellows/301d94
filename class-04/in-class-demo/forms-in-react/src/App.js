import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

let data = [1,2,3,4,5,6,7,8,9,10];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      howToSort: '',
      filteredData: data
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // let name = e.target.name.value;
    // let selected = e.target.selected.value;
    // console.log(name, selected);
    // this.setState({
    //   name: name,
    //   howToSort: selected
    // });
    console.log(this.state.howToSort);
    if (this.state.howToSort === 'even') {
      let newData = data.filter(num => num % 2 === 0);
      this.setState({filteredData: newData});
    } else if (this.state.howToSort === 'odd') {
      let newData = data.filter(num => num % 2 !== 0);
      this.setState({filteredData: newData});
    } else {
      this.setState({filteredData: data});
    }
  };

  handleSelect = (e) => {
    let selected = e.target.value;
    this.setState({
      howToSort: selected
    })
  }


  render() {
    
    let numbers = this.state.filteredData.map((num, idx) => {
      return <ListGroup.Item key={idx}>{num}</ListGroup.Item>
    });

    return (
      <>
        <header>
          <h1>Forms in React</h1>
        </header>
        <main>
          <Form onSubmit={this.handleSubmit}>

            <Form.Label>Name
              <Form.Control type="text" name="name"/>
            </Form.Label>

            <Form.Label htmlFor="username">
              Username
            </Form.Label>
            <Form.Control type="text" name="username" id="username"/>

            <Form.Group controlId="sortby">
                <Form.Label>Selected Numbers</Form.Label>
                <Form.Select name="selected"  onChange={this.handleSelect}>
                  <option value="all">All</option>
                  <option value="odd">Odd</option>
                  <option value="even">Even</option>
                </Form.Select>
            </Form.Group>
            <Button type="submit">Submit</Button>
          </Form>
          <ListGroup>
            {/* ListGroup.Items for all the numbers in the array */}
            {numbers}
          </ListGroup>
        </main>
      </>
    );
  }
}

export default App;



/*

          <form onSubmit={this.handleSubmit}>
            <label>Name
              <input type="text" name="name"/>
            </label>
            <fieldset>
                <legend>Selected Numbers</legend>
                <select name="selected" onChange={this.handleSelect}>
                  <option value="all">All</option>
                  <option value="odd">Odd</option>
                  <option value="even">Even</option>
                </select>
            </fieldset>
            <button type="submit">Submit</button>
          </form>

*/
