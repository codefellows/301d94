import React from "react";
import Button from 'react-bootstrap/Button';
import './Person.css';

// let helpMe = false;

class Person extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      waves: 0,
      helpMe: false
    }
  }

  // event handler:
  handleWaves = () => {
    // code that will update the value of waves in State
    this.setState({
      waves: this.state.waves + 1,
      banana: 'Banana'
    });
  };

  needsHelp = () => {
    // helpMe = true;
    this.setState({
      helpMe: true
    });
    // console.log(helpMe);
  };

  helped = () => {
    this.setState({
      helpMe: false,
    });
  };

  render() {
    console.log(this.props);
    return (
      <article className="person">
        <h3>{this.props.name}</h3>
        <p>👋 {this.state.waves} greetings</p>
        {/* onClick is the event listener */}
        <p onClick={this.handleWaves}>Say Hello!</p>
        <img src={this.props.img} alt={this.props.name}/>

        <div>{this.state.helpMe ? 'I need help!' : ''}</div>
        <Button className="article-button" onClick={this.needsHelp}>Help</Button>
        <Button 
          className="article-button" 
          // onClick={() => {this.setState({helpMe: false})}} 
          onClick={this.helped}
          variant="success"
        >
          I got help
        </Button>
      </article>
    )
  }
}

export default Person;
