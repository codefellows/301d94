import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
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

  handleNameClick = () => {
    this.props.handleShowModal(this.props.name);
  }

  render() {
    console.log(this.props);
    return (
      <Col className="mt-4">
      <Card className="person h-100 p-3">
        <Card.Title onClick={this.handleNameClick}>{this.props.name}</Card.Title>
        <p>👋 {this.state.waves} greetings</p>
        {/* onClick is the event listener */}
        <p onClick={this.handleWaves}>Say Hello!</p>
        <Card.Img 
          src={this.props.img} 
          alt={this.props.name}
          onClick={this.props.handleHeart}
        />

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
      </Card>
      </Col>
    )
  }
}

export default Person;
