import React from 'react';
import axios from 'axios';
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

  // next effect: when the components loads it has all it needs. The data will be deplayed
  componentDidMount() {
    this.getCats();
  }

  render() {

    let cats = this.state.cats.map(cat => (
      <p key={cat._id}>{cat.name} is {cat.color}</p>
    ));
    return (
      <>
        <header>
          <h1>Cool Cats</h1>
        </header>
        <main>
        {
          this.state.cats.length > 0 &&
          <>
            {cats}
          </>
        }
        </main>
      </>
    );
  }
}

export default App;
