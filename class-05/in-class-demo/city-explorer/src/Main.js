import React from 'react';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: ''
    }
  }

  handleCity = (e) => {
    this.setState({
      city: e.target.value
    });
    console.log(this.state.city);
    // get data from some APIs
  }

  submitForm = (e) => {
    e.preventDefault();
    
    console.log(this.state.city);
    // get data from some APIs
  }

  render() {
    
    return (
      <>
        <form onSubmit={this.submitForm}>
          <label>Pick a City
            <input 
              type="text" 
              name="city"
              onInput={this.handleCity}
            />
          </label>
          <button>Submit</button>
        </form>
      </>
    );
  }
}

export default Main;
