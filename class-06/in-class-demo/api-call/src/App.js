import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: {},
      starWarsData: [],
      error: false,
      errorMessage: ''
    }
  }

  handleStarWars = async (e) => {
    e.preventDefault();
    // gets the Star Wars Data from the API
    try {
      let response = await axios.get('https://swapi.dev/api/people/?page=1');
      // console.log(response.data.results);
      // save that data in state
      this.setState({
        starWarsData: response.data.results,
        error: false
      });
    } catch (error) {
      console.log('error: ', error);
      console.log('error.message: ', error.message);
      this.setState({
        error: true,
        errorMessage: `An Error Occurred: ${error.response.status}`
      })
    }
  };

  handleCityInput = (e) => {
    let city = e.target.value;
    this.setState({
      city: city
    });
  };

  handleCitySubmit = async (e) => {
    e.preventDefault();
    console.log(this.state.city);
    // request city data from the API
    let response = await axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`);
    console.log(response.data[0]);
    // save that data in state
  }

  render() {
    // let mapURL = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=47.6038321,-122.3300624&zoom=12`
    // console.log(this.state.starWarsData);
    let swChars = this.state.starWarsData.map((char, idx) => {
      return <li key={idx}>{char.name}</li>
    });
    return (
      <>
        <h1>Data from an API</h1>
        <form onSubmit={this.handleStarWars}>
          <button>Display Star Wars data</button>
        </form>
        <form onSubmit={this.handleCitySubmit}>
          <label>Pick a City:
            <input 
              type="text" 
              onInput={this.handleCityInput}
              name="city"
            />
            <button type="submit">Get City Data</button>
          </label>
        </form>
        {
          this.state.error 
          ?
          <p>{this.state.errorMessage}</p>
          :
          <ul>
            {swChars}
          </ul>
        }
      </>
    );
  }
}

export default App;
